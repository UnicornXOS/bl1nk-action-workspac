export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle logout
    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
