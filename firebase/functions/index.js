const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

// ===== WORKFLOW EXECUTION LOGGER =====
exports.logWorkflowExecution = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User not authenticated');
  }

  const { workflowId, status, message, error } = data;

  try {
    const executionRef = db
      .collection('workflows')
      .doc(workflowId)
      .collection('executions')
      .doc();

    await executionRef.set({
      status,
      message,
      error: error || null,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      userId: context.auth.uid
    });

    console.log(`✅ Logged workflow execution: ${workflowId}`);
    return { success: true, id: executionRef.id };
  } catch (error) {
    console.error('❌ Error logging execution:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

// ===== CREATE USER DOCUMENT =====
exports.createUserDocument = functions.auth.user().onCreate(async (user) => {
  try {
    await db.collection('users').doc(user.uid).set({
      email: user.email,
      name: user.displayName || 'User',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      lastLogin: admin.firestore.FieldValue.serverTimestamp(),
      settings: {
        theme: 'light',
        notifications: true,
        timezone: 'Asia/Bangkok',
        language: 'th'
      }
    });

    console.log(`✅ Created user document: ${user.uid}`);
  } catch (error) {
    console.error('❌ Error creating user document:', error);
  }
});

// ===== UPDATE LAST LOGIN =====
exports.updateLastLogin = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User not authenticated');
  }

  try {
    await db.collection('users').doc(context.auth.uid).update({
      lastLogin: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('❌ Error updating last login:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

// ===== SYNC TASK FROM APPS SCRIPT =====
exports.syncTask = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User not authenticated');
  }

  const { title, description, dueDate, priority, googleTaskId, workflowId } = data;

  try {
    const taskRef = db.collection('tasks').doc();

    await taskRef.set({
      title,
      description,
      dueDate,
      priority,
      status: 'pending',
      googleTaskId,
      workflowId,
      userId: context.auth.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`✅ Synced task: ${taskRef.id}`);
    return { success: true, id: taskRef.id };
  } catch (error) {
    console.error('❌ Error syncing task:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

// ===== SYNC EMAIL FROM APPS SCRIPT =====
exports.syncEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User not authenticated');
  }

  const { subject, sender, body, timestamp, workflowId } = data;

  try {
    const emailRef = db.collection('emails').doc();

    await emailRef.set({
      subject,
      sender,
      body,
      timestamp,
      status: 'unread',
      processed: false,
      workflowId,
      userId: context.auth.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`✅ Synced email: ${emailRef.id}`);
    return { success: true, id: emailRef.id };
  } catch (error) {
    console.error('❌ Error syncing email:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

// ===== DELETE OLD LOGS (Cleanup) =====
exports.cleanupOldLogs = functions.pubsub.schedule('every 7 days').onRun(async (context) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const snapshot = await db
      .collection('logs')
      .where('timestamp', '<', thirtyDaysAgo)
      .get();

    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    console.log(`✅ Deleted ${snapshot.size} old logs`);
    return { success: true, deleted: snapshot.size };
  } catch (error) {
    console.error('❌ Error cleaning up logs:', error);
  }
});
