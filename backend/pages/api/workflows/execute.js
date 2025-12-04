export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle executing a workflow
    res.status(200).json({ message: 'Workflow executed' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
