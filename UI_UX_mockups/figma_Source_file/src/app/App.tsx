import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/app/components/LoginPage';
import DashboardPage from '@/app/components/DashboardPage';
import CourseManagementPage from '@/app/components/CourseManagementPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/courses" element={<CourseManagementPage />} />
      </Routes>
    </Router>
  );
}
