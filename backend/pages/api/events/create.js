export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle creating an event
    res.status(201).json({ message: 'Event created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
