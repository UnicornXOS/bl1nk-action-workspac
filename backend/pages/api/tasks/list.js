export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle fetching list of tasks
    res.status(200).json({ tasks: [] });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
