const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function health() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('API error');
  return res.json();
}

export async function fetchPatientDashboard() {
  const res = await fetch(`${API_BASE}/patient/dashboard`);
  if (!res.ok) throw new Error('Failed to fetch dashboard');
   console.log("Raw response:", res);
  return res.json();
}
export async function fetchDoctorDashboard(doctorId) {
const res = await fetch(`${API_BASE}/doctor/dashboard?doctorId=${doctorId}`);
  if (!res.ok) throw new Error("Failed to fetch doctor dashboard");
  return res.json();

}