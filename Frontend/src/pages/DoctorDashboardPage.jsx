import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import MetricCard from "../components/MetricCard.jsx";
import PatientCard from "../components/PatientCard.jsx";
import EmptyCard from "../components/EmptyCard.jsx";
import { fetchDoctorDashboard } from "../services/api.js";

function DoctorDashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doctorId = 1; 
    fetchDoctorDashboard(doctorId)
      .then(setData)
      .catch((err) => console.error("Doctor dashboard fetch failed:", err))
      .finally(() => setLoading(false));
  }, []);

  const roleColors = {
    doctor: "#e8daef",
    patient: "#d1f2eb",
  };

  const pastelColor = data?.user?.role
    ? roleColors[data.user.role.toLowerCase()] || "#f0f0f0"
    : "#f0f0f0";

  if (loading)
    return (
      <div className="text-center mt-5 text-secondary">
        Loading dashboard...
      </div>
    );

  if (!data || data.patients.length === 0)
    return (
      <EmptyCard message="No patients assigned yet. Your care team will update this soon." />
    );

  return (
    <div className="container-fluid px-0 bg-light text-dark">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        
        <div
          className="card shadow-sm d-none d-md-block"
          style={{
            width: "750px",
            borderRight: "1px solid #dee2e6",
            borderRadius: "0",
            marginBottom: "0",
          }}
        >
          <div
            className="card-body p-0"
            style={{
              backgroundColor: pastelColor,
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden" 
            }}
          >
            <Sidebar user={data.doctor} roleColors={roleColors} />
          </div>
        </div>

      
        <div className="card flex-grow-1 shadow-sm border-0 rounded-0">
          <main className="card-body p-4" style={{ minHeight: "100vh" }}>
          
            <header
              className="mb-4 text-center py-4 rounded-4 shadow-sm"
              style={{
                background: "linear-gradient(90deg, #e0f7fa, #fce4ec)",
                border: "1px solid #dee2e6",
              }}
            >
              <h2 className="fw-light mb-2">Welcome, Dr. {data.doctor.name}</h2>
              <span
                className="badge rounded-pill px-3 py-2 text-dark"
                style={{ backgroundColor: pastelColor }}
              >
                {data.doctor.role.toUpperCase()}
              </span>
            </header>

          
            <section id="metrics" className="mb-5">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4">
                  <MetricCard
                    title="Assigned Patients"
                    value={data.patients.length}
                    icon="bi-person-heart"
                    color="primary"
                  />
                </div>
                <div className="col-sm-6 col-lg-4">
                  <MetricCard
                    title="Active Care Plans"
                    value={
                      data.patients.filter((p) => p.carePlan !== null).length
                    }
                    icon="bi-clipboard-check"
                    color="success"
                  />
                </div>
                <div className="col-sm-12 col-lg-4">
                  <MetricCard
                    title="Recent Surveys"
                    value={
                      data.patients.filter((p) => p.survey !== null).length
                    }
                    icon="bi-activity"
                    color="info"
                  />
                </div>
              </div>
            </section>

           
            <section id="snapshot" className="mb-5">
              <div className="row g-4">
                {data.patients.map((patient) => (
                  <div key={patient.id} className="col-sm-6 col-lg-4">
                    <div className="card rounded-4 shadow-sm border-0 p-3">
                      <PatientCard patient={patient} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboardPage;
