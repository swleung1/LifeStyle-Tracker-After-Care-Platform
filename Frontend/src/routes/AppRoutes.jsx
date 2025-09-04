import { Routes, Route } from "react-router-dom";
import PatientDashboardPage from "../pages/PatientDashboardPage";
import  SignupPage  from "../pages/SignupPage";
import  NotFoundPage from "../pages/NotFoundPage"
import DoctorDashboardPage from './../pages/DoctorDashboardPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard/patient" element={<PatientDashboardPage />} />
      <Route path="/dashboard/doctor" element={<DoctorDashboardPage />} />
    </Routes>
  );
}

export default AppRoutes;