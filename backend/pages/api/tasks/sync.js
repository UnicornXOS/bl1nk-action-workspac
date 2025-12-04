export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle syncing tasks
    res.status(200).json({ message: 'Tasks synced' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
