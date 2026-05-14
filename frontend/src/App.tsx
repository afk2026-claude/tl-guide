import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { API_BASE } from './config';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import EquipmentPage from './pages/EquipmentPage';
import CalculatorPage from './pages/CalculatorPage';
import AdminLoginPage from './pages/admin/LoginPage';
import AdminDashboardPage from './pages/admin/DashboardPage';
import AdminLink from './components/AdminLink';

function VisitTracker() {
  const location = useLocation();
  useEffect(() => {
    // 向后端发送访问记录（通过 API 中间件自动记录）
    fetch(`${API_BASE}/api/health`).catch(() => {});
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <VisitTracker />
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Routes>
        </main>
        <AdminLink />
        <Footer />
      </div>
    </AuthProvider>
  );
}
