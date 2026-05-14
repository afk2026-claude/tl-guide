import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getStats } from '../../engine/visitTracker';

export default function AdminDashboardPage() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [stats] = useState(() => getStats());

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const maxTrend = stats.dailyTrend ? Math.max(...stats.dailyTrend.map(d => d.visits), 1) : 1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-700">📊 管理后台</h1>
        <button onClick={() => { logout(); navigate('/admin/login'); }}
          className="px-4 py-2 rounded-xl text-sm font-medium bg-white text-gray-500 border-2 border-gray-200 hover:border-red-300 hover:text-red-500 transition-all">
          退出登录
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: '总访问量', value: stats.totalVisits, icon: '👀' },
          { label: '今日访问', value: stats.todayVisits, icon: '📅' },
          { label: '总页面浏览', value: stats.last24hCount, icon: '⏰' },
        ].map(card => (
          <div key={card.label} className="bg-white/70 backdrop-blur rounded-2xl p-5 border-2 border-white/80 text-center">
            <div className="text-2xl mb-1">{card.icon}</div>
            <div className="text-3xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-magic-500 to-candy-500">
              {card.value}
            </div>
            <div className="text-xs text-gray-400 mt-1">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border-2 border-white/80 mb-8">
        <h2 className="font-bold text-gray-700 mb-4">📈 近7天访问趋势</h2>
        <div className="flex items-end gap-2 h-32">
          {stats.dailyTrend.map(d => {
            const pct = d.visits / maxTrend;
            return (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400">{d.visits || ''}</span>
                <div className="w-full rounded-lg bg-gradient-to-t from-magic-400 to-magic-300 transition-all"
                  style={{ height: `${Math.max(pct * 100, 4)}%` }} />
                <span className="text-xs text-gray-400">{d.date.slice(5)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border-2 border-white/80">
        <h2 className="font-bold text-gray-700 mb-4">🔝 页面访问排行</h2>
        {stats.topPages.length > 0 ? (
          <div className="space-y-2">
            {stats.topPages.map((p, i) => (
              <div key={p.page} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/60">
                <span className="text-sm font-bold text-gray-300 w-6">#{i + 1}</span>
                <span className="flex-1 text-sm text-gray-600 truncate">{p.page || '/'}</span>
                <span className="text-sm font-bold text-magic-600">{p.count}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm text-center py-8">暂无数据，浏览网站后会自动记录</p>
        )}
        <p className="text-xs text-gray-300 text-center mt-4">数据存储在你的浏览器中，清除缓存会丢失</p>
      </div>
    </div>
  );
}
