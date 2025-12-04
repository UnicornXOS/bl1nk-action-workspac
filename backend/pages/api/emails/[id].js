export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Handle fetching an email by id
    res.status(200).json({ email: { id, subject: 'Sample Email' } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
