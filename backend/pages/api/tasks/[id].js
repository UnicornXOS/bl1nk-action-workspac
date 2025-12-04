export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Handle fetching a task by id
    res.status(200).json({ task: { id, name: 'Sample Task' } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
