import fs from 'fs';
import path from 'path';

const DATA_FILE = '/tmp/visits.json';

function ensureData() {
  if (!fs.existsSync(DATA_FILE)) {
    const initial = { totalVisits: 0, dailyVisits: {}, pageViews: {}, last24h: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initial));
  }
}

function readData() {
  ensureData();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

export function trackVisit(page) {
  const data = readData();
  const today = new Date().toISOString().slice(0, 10);
  const now = Date.now();

  data.totalVisits = (data.totalVisits || 0) + 1;
  if (!data.dailyVisits[today]) data.dailyVisits[today] = 0;
  data.dailyVisits[today]++;
  if (!data.pageViews[page]) data.pageViews[page] = 0;
  data.pageViews[page]++;

  data.last24h = data.last24h || [];
  data.last24h.push({ time: now, page });
  const cutoff = now - 24 * 60 * 60 * 1000;
  data.last24h = data.last24h.filter(d => d.time > cutoff);

  writeData(data);
}

export function getStats() {
  const data = readData();
  const today = new Date().toISOString().slice(0, 10);
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    days.push({ date: d, visits: data.dailyVisits[d] || 0 });
  }
  const topPages = Object.entries(data.pageViews || {})
    .sort((a, b) => b[1] - a[1]).slice(0, 10)
    .map(([page, count]) => ({ page, count }));

  return {
    totalVisits: data.totalVisits || 0,
    todayVisits: data.dailyVisits[today] || 0,
    dailyTrend: days,
    topPages,
    last24hCount: (data.last24h || []).length
  };
}
