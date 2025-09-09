import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { useUser } from "../hooks/useUser.js";
import { roleColors } from "../assets/color.js";


const patients = [
  {
    id: "1",
    name: "Jane Doe",
    condition: "Post-surgery recovery",
    survey: {
      risk: "urgent",
      responses: {
        painLevel: 9,
        mobility: 1,
        appetite: false,
        fever: 102.4,
      },
    },
    carePlan: null,
  },
  {
    id: "2",
    name: "John Smith",
    condition: "Chronic fatigue",
    survey: {
      risk: "watch",
      responses: {
        painLevel: 5,
        mobility: 3,
        appetite: true,
        fever: 99.1,
      },
    },
    carePlan: {
      title: "Hydration and rest",
    },
  },
  {
    id: "3",
    name: "Emily Chen",
    condition: "Mild flu symptoms",
    survey: null,
    carePlan: null,
  },
];

function PatientListPage() {
  const { user } = useUser();
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    setPatientList(patients);
  }, []);

  
  if (!user || !user.role) {
    return (
      <div className="text-center py-5 text-muted">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  const pastelColor = roleColors[user.role.toLowerCase()] || "#f0f0f0";

  return (
    <div className="container-fluid px-0 bg-light text-dark">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        
        <div
          className="card shadow-sm d-none d-md-block"
          style={{
            width: "410px",
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
            <Sidebar user={user} />
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
              <h2 className="fw-light mb-2">Your Patients</h2>
              <span
                className="badge rounded-pill px-3 py-2 text-dark"
                style={{ backgroundColor: pastelColor }}
              >
                {user.role.toUpperCase()}
              </span>
            </header>

            <section className="row g-4">
              {patientList.length > 0 ? (
                patientList.map((patient) => (
                  <div key={patient.id} className="col-sm-6 col-lg-4">
                    <div className="card rounded-4 shadow-sm border-0 p-3 bg-white">
                      <h5 className="mb-1">{patient.name}</h5>
                      <p className="text-muted small mb-2">{patient.condition}</p>

                      <div className="mb-2">
                        <strong>Care Plan:</strong>{" "}
                        {patient.carePlan ? (
                          patient.carePlan.title
                        ) : (
                          <span className="text-secondary">None</span>
                        )}
                      </div>

                      <div className="mb-2">
                        <strong>Survey:</strong>{" "}
                        {patient.survey ? (
                          <>
                            Pain: {patient.survey.responses.painLevel}, Mobility:{" "}
                            {patient.survey.responses.mobility}, Temp:{" "}
                            {patient.survey.responses.fever} F
                          </>
                        ) : (
                          <span className="text-secondary">No survey submitted</span>
                        )}
                      </div>

                      <div>
                        <strong>Risk Level:</strong>{" "}
                        {patient.survey ? (
                          <span className="text-danger">{patient.survey.risk}</span>
                        ) : (
                          <span className="text-secondary">Unknown</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted py-5">
                  <p>No patients assigned yet.</p>
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PatientListPage;