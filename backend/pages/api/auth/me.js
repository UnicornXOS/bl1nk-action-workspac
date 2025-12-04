export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle fetching user data
    res.status(200).json({ user: { name: 'John Doe' } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
