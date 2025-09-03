import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import  SignupPage  from "../pages/SignupPage";
import  NotFoundPage from "../pages/NotFoundPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default AppRoutes;