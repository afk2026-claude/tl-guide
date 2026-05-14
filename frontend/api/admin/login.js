const ADMIN_USER = 'admin';
const ADMIN_PASS = '1234';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { username, password } = req.body || {};
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const raw = `${ADMIN_USER}:${ADMIN_PASS}:${Date.now()}`;
    const token = Buffer.from(raw).toString('base64');
    return res.json({ success: true, token, user: { name: ADMIN_USER } });
  }

  res.status(401).json({ success: false, message: '用户名或密码错误' });
}
