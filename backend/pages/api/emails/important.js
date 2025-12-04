export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle fetching important emails
    res.status(200).json({ emails: [] });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
