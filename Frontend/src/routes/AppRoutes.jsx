import { Routes, Route } from "react-router-dom";
import PatientDashboardPage from "../pages/PatientDashboardPage";
import SignupPage from "../pages/SignupPage";
import NotFoundPage from "../pages/NotFoundPage";
import DoctorDashboardPage from "./../pages/DoctorDashboardPage";
import LoginPage from "../pages/LoginPage";
import SurveyPage from "../pages/SurveyPage";
import ScheduleAppointmentPage from "../pages/ScheduleAppointmentPage";
import AssignCarePlanPage from "../pages/AssignCarePlanPage";
import PatientListPage from "../pages/PatientListPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/appointment" element={<ScheduleAppointmentPage />} />
      <Route path="/assign-care" element={<AssignCarePlanPage />} />
      <Route path="/patients" element={<PatientListPage />} />
      <Route path="/dashboard/patient" element={<PatientDashboardPage />} />
      <Route path="/dashboard/doctor" element={<DoctorDashboardPage />} />
    </Routes>
  );
}

export default AppRoutes;
