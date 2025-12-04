export default function handler(req, res) {
  if (req.method === 'DELETE') {
    // Handle deleting a task
    res.status(200).json({ message: 'Task deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
