import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../../data/visits.json');

// 确保 data 目录和文件存在
function ensureData() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    const initial = { totalVisits: 0, dailyVisits: {}, pageViews: {}, last24h: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2));
  }
}

function readData() {
  ensureData();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// 追踪访问
export function trackVisit(req, res, next) {
  const data = readData();
  const today = new Date().toISOString().slice(0, 10);
  const now = Date.now();
  const page = req.path;

  // 排除 admin API 自身
  if (page.startsWith('/api/admin')) return next();

  data.totalVisits = (data.totalVisits || 0) + 1;

  // 日访问
  if (!data.dailyVisits[today]) data.dailyVisits[today] = 0;
  data.dailyVisits[today]++;

  // 页面访问
  if (!data.pageViews[page]) data.pageViews[page] = 0;
  data.pageViews[page]++;

  // 最近24小时（用于实时曲线）
  data.last24h = data.last24h || [];
  data.last24h.push({ time: now, page });
  // 只保留最近24小时
  const cutoff = now - 24 * 60 * 60 * 1000;
  data.last24h = data.last24h.filter(d => d.time > cutoff);

  writeData(data);
  next();
}

export function getStats() {
  const data = readData();
  const today = new Date().toISOString().slice(0, 10);

  // 过去7天
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    days.push({ date: d, visits: data.dailyVisits[d] || 0 });
  }

  // 页面排行
  const topPages = Object.entries(data.pageViews || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([page, count]) => ({ page, count }));

  return {
    totalVisits: data.totalVisits || 0,
    todayVisits: data.dailyVisits[today] || 0,
    dailyTrend: days,
    topPages,
    last24hCount: (data.last24h || []).length
  };
}
