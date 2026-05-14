import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminLink() {
  const { isAdmin } = useAuth();
  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isAdmin ? (
        <Link to="/admin"
          className="block px-3 py-1.5 bg-white/80 backdrop-blur rounded-xl text-xs text-gray-400 border border-gray-200 hover:text-magic-600 hover:border-magic-300 shadow-sm transition-all">
          📊 后台
        </Link>
      ) : (
        <Link to="/admin/login"
          className="block px-3 py-1.5 bg-white/80 backdrop-blur rounded-xl text-xs text-gray-300 border border-gray-100 hover:text-gray-500 hover:border-gray-200 shadow-sm transition-all">
          🔐 管理
        </Link>
      )}
    </div>
  );
}
