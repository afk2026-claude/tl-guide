import { Router } from 'express';
import { getStats } from '../middleware/visitTracker.js';

export const adminRouter = Router();

// 管理员凭证
const ADMIN_USER = 'admin';
const ADMIN_PASS = '1234';

// 生成简单 token（生产环境应使用 JWT）
function makeToken() {
  const raw = `${ADMIN_USER}:${ADMIN_PASS}:${Date.now()}`;
  return Buffer.from(raw).toString('base64');
}

// 验证 token
function verifyToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [user, pass] = decoded.split(':');
    return user === ADMIN_USER && pass === ADMIN_PASS;
  } catch {
    return false;
  }
}

// 登录
adminRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = makeToken();
    return res.json({ success: true, token, user: { name: ADMIN_USER } });
  }
  res.status(401).json({ success: false, message: '用户名或密码错误' });
});

// 验证中间件
function authGuard(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: '未登录' });
  }
  if (!verifyToken(auth.slice(7))) {
    return res.status(401).json({ success: false, message: '登录已过期' });
  }
  next();
}

// 获取统计
adminRouter.get('/stats', authGuard, (req, res) => {
  res.json({ success: true, ...getStats() });
});
