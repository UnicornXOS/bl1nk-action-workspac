export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle creating a workflow
    res.status(201).json({ message: 'Workflow created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
