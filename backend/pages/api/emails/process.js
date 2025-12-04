export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle processing emails
    res.status(200).json({ message: 'Emails processed' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
