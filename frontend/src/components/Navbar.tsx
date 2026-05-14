import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: '首页', icon: '🏠' },
  { to: '/skills', label: '技能查询', icon: '🔍' },
  { to: '/equipment', label: '装备词条', icon: '⚔️' },
  { to: '/calculator', label: 'BD 计算器', icon: '🧮' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b-2 border-magic-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-magic-600 to-candy-500 bg-clip-text text-transparent">
          🔥 火炬编年史
        </Link>
        <ul className="flex items-center gap-1">
          {links.map(link => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-magic-100 text-magic-700'
                      : 'text-gray-500 hover:bg-magic-50 hover:text-magic-600'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
