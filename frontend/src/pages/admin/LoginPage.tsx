import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const ok = await login(username, password);
    setLoading(false);
    if (ok) navigate('/admin');
    else setError('用户名或密码错误');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur rounded-3xl p-8 border-2 border-white/80 w-full max-w-sm shadow-lg">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🔐</div>
          <h1 className="text-xl font-bold text-gray-700">管理员登录</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500 block mb-1">用户名</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-magic-300 outline-none text-sm bg-white/80" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 block mb-1">密码</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-magic-300 outline-none text-sm bg-white/80" required />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-magic-500 to-magic-600 hover:scale-[1.02] transition-all disabled:opacity-50">
            {loading ? '登录中...' : '登录'}
          </button>
        </form>
      </div>
    </div>
  );
}
