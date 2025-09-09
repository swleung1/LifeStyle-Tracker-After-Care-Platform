import React from "react";
import Sidebar from "../components/Sidebar";
import AppointmentForm from "../components/AppointmentForm";
import { useUser } from "../hooks/useUser";
import { roleColors } from "../assets/color";

function ScheduleAppointmentPage() {
  const { user } = useUser();
  const pastelColor = roleColors[user?.role?.toLowerCase()] || "#f0f0f0";

  return (
    <div className="container-fluid px-0 bg-light text-dark">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        
        <div
          className="card shadow-sm d-none d-md-block"
          style={{
            width: "330px",
            borderRight: "1px solid #dee2e6",
            borderRadius: "0",
          }}
        >
          <div
            className="card-body p-0"
            style={{
              backgroundColor: pastelColor,
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Sidebar />
          </div>
        </div>

       
        <div className="card flex-grow-1 shadow-sm border-0 rounded-0">
          <main className="card-body p-4">
            <header
              className="mb-4 text-center py-4 rounded-4 shadow-sm"
              style={{
                background: "linear-gradient(90deg, #e0f7fa, #fce4ec)",
                border: "1px solid #dee2e6",
              }}
            >
              <h2 className="fw-light mb-2">Schedule an Appointment</h2>
              <span
                className="badge rounded-pill px-3 py-2 text-dark"
                style={{ backgroundColor: pastelColor }}
              >
                {user?.role?.toUpperCase()}
              </span>
            </header>

            <AppointmentForm />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ScheduleAppointmentPage;