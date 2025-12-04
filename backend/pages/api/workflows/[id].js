export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Handle fetching a workflow by id
    res.status(200).json({ workflow: { id, name: 'Sample Workflow' } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
