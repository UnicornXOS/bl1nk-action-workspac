import { db } from '../../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, status, message, workflowId, userId, error, level, data } = req.body;

  try {
    // บันทึกลง Firebase
    const docRef = await addDoc(collection(db, 'logs'), {
      action,
      status,
      message,
      level: level || 'INFO',
      workflowId: workflowId || null,
      userId: userId || null,
      error: error || null,
      data: data || {},
      timestamp: serverTimestamp(),
      createdAt: serverTimestamp()
    });

    console.log('✅ Log created:', docRef.id);

    return res.status(200).json({
      success: true,
      id: docRef.id,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('❌ Error creating log:', error);
    return res.status(500).json({ error: error.message });
  }
}
