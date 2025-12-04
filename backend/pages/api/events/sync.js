export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle syncing events
    res.status(200).json({ message: 'Events synced' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
