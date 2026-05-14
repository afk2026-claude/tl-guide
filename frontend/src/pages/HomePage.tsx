import { Link } from 'react-router-dom';
import { heroes } from '../data/heroes';

const features = [
  { icon: '🔍', title: '技能查询', desc: '按角色/名称/效果搜索全部技能', to: '/skills', color: 'from-magic-400 to-magic-600' },
  { icon: '⚔️', title: '装备词条', desc: '各部位词缀 T 级一览与来源', to: '/equipment', color: 'from-candy-400 to-candy-600' },
  { icon: '🧮', title: 'BD 计算器', desc: '输入装备分析 BD，获取改进建议', to: '/calculator', color: 'from-amber-400 to-orange-500' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-4 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute text-4xl opacity-20 animate-float" style={{ top: '15%', left: '8%' }}>⚔️</div>
        <div className="absolute text-4xl opacity-20 animate-float" style={{ top: '25%', right: '10%', animationDelay: '1s' }}>🛡️</div>
        <div className="absolute text-4xl opacity-20 animate-float" style={{ bottom: '30%', left: '15%', animationDelay: '2s' }}>✨</div>
        <div className="relative z-10">
          <div className="text-7xl mb-4 animate-bounce-slow">🔥</div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-magic-600 via-purple-500 to-candy-500 bg-clip-text text-transparent mb-4">
            火炬编年史
          </h1>
          <p className="text-lg text-gray-500 mb-2">火炬之光无限 · 攻略工具站</p>
          <p className="text-gray-400 max-w-md mx-auto mb-8">技能查询 · 装备词条 · BD 计算与优化</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/skills" className="px-6 py-3 bg-gradient-to-r from-magic-500 to-magic-600 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-magic-200">
              开始查询技能
            </Link>
            <Link to="/calculator" className="px-6 py-3 bg-white text-magic-600 rounded-2xl font-bold border-2 border-magic-200 hover:border-magic-400 hover:scale-105 transition-transform">
              BD 计算器
            </Link>
          </div>
        </div>
      </section>

      {/* 功能入口 */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map(f => (
            <Link key={f.to} to={f.to}
              className="bg-white/70 backdrop-blur rounded-2xl p-6 border-2 border-white/80 hover:border-magic-300 hover:-translate-y-1 transition-all shadow-sm hover:shadow-lg group">
              <div className={`text-3xl mb-3 group-hover:scale-110 transition-transform inline-block`}>{f.icon}</div>
              <h3 className="font-bold text-gray-700 mb-1">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 英雄列表 */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">选择英雄查看详情</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroes.map(hero => (
            <Link key={hero.id} to={`/skills?class=${hero.name}`}
              className="bg-white/70 backdrop-blur rounded-2xl p-5 text-center border-2 border-white/80 hover:border-magic-300 hover:-translate-y-1 transition-all shadow-sm hover:shadow-md group">
              <div className="text-4xl mb-2 group-hover:animate-wiggle">{hero.icon}</div>
              <h3 className="font-bold text-gray-700">{hero.name}</h3>
              <p className="text-xs text-magic-500 font-medium">{hero.title}</p>
              <div className="flex flex-wrap gap-1 justify-center mt-2">
                {hero.tags.slice(0, 2).map(t => (
                  <span key={t} className="px-2 py-0.5 bg-magic-50 text-magic-600 rounded-full text-xs">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
