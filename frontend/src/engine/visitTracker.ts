const STORAGE_KEY = 'tl_visits';

interface VisitData {
  totalVisits: number;
  dailyVisits: Record<string, number>;
  pageViews: Record<string, number>;
  sessions: number;
}

function getData(): VisitData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { totalVisits: 0, dailyVisits: {}, pageViews: {}, sessions: 0 };
}

function saveData(data: VisitData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function trackVisit(page: string) {
  const data = getData();
  const today = new Date().toISOString().slice(0, 10);

  data.totalVisits++;
  data.dailyVisits[today] = (data.dailyVisits[today] || 0) + 1;
  data.pageViews[page] = (data.pageViews[page] || 0) + 1;

  saveData(data);
}

export function getStats() {
  const data = getData();
  const today = new Date().toISOString().slice(0, 10);

  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    days.push({ date: d, visits: data.dailyVisits[d] || 0 });
  }

  const topPages = Object.entries(data.pageViews)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([page, count]) => ({ page, count }));

  return {
    totalVisits: data.totalVisits,
    todayVisits: data.dailyVisits[today] || 0,
    dailyTrend: days,
    topPages,
    last24hCount: data.totalVisits
  };
}
