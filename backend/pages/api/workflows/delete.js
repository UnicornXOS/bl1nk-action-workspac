export default function handler(req, res) {
  if (req.method === 'DELETE') {
    // Handle deleting a workflow
    res.status(200).json({ message: 'Workflow deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
