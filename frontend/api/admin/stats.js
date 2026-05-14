import { getStats } from '../_data.js';

const ADMIN_USER = 'admin';
const ADMIN_PASS = '1234';

function verifyToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [user, pass] = decoded.split(':');
    return user === ADMIN_USER && pass === ADMIN_PASS;
  } catch {
    return false;
  }
}

export default function handler(req, res) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ') || !verifyToken(auth.slice(7))) {
    return res.status(401).json({ success: false, message: '未登录' });
  }

  res.json({ success: true, ...getStats() });
}
