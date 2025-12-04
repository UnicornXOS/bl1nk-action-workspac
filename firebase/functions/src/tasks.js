const functions = require("firebase-functions");

exports.onTaskUpdate = functions.firestore
  .document("tasks/{taskId}")
  .onUpdate((change, context) => {
    const before = change.before.data();
    const after = change.after.data();
    console.log("Task updated from", before, "to", after);
    // Add logic here, e.g., sync with Google Tasks
    return null;
  });
