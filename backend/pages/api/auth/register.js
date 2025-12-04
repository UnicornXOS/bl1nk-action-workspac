export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle registration
    res.status(200).json({ message: 'Registration successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
