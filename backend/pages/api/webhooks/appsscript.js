export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle webhook from Apps Script
    console.log(req.body);
    res.status(200).json({ message: 'Webhook received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
