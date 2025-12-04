export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle creating a task
    res.status(201).json({ message: 'Task created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
