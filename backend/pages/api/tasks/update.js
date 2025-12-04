export default function handler(req, res) {
  if (req.method === 'PUT') {
    // Handle updating a task
    res.status(200).json({ message: 'Task updated' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
