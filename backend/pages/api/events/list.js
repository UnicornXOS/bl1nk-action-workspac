export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle fetching list of events
    res.status(200).json({ events: [] });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
