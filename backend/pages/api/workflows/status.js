export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle fetching workflow status
    res.status(200).json({ status: 'completed' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
