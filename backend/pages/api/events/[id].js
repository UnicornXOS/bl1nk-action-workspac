export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Handle fetching an event by id
    res.status(200).json({ event: { id, title: 'Sample Event' } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
