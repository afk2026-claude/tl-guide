import { trackVisit } from './_data.js';

export default function handler(req, res) {
  const page = req.query.page || '/';
  trackVisit(page);
  res.json({ status: 'ok', timestamp: Date.now() });
}
