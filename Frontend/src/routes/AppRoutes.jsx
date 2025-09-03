import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import { SignupPage } from "../pages/SignupPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
