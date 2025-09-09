import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { useUser } from "../hooks/useUser.js";
import { roleColors } from "../assets/color.js";

const patients = [
  {
    id: "1",
    name: "Jane Doe",
    survey: {
      risk: "urgent",
      responses: {
        painLevel: 9,
        mobility: 1,
        appetite: false,
        fever: 102.4,
      },
    },
  },
  {
    id: "2",
    name: "John Smith",
    survey: {
      risk: "watch",
      responses: {
        painLevel: 5,
        mobility: 3,
        appetite: true,
        fever: 99.1,
      },
    },
  },
  {
    id: "3",
    name: "Emily Chen",
    survey: {
      risk: "ok",
      responses: {},
    },
  },
];
function AssignCarePlanPage() {
  const { user } = useUser();
  const pastelColor = roleColors[user?.role?.toLowerCase()] || "#f0f0f0";


  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [carePlan, setCarePlan] = useState("");

  useEffect(() => {
    const patient = patients.find((p) => p.id === selectedPatientId);
    setSelectedPatient(patient);

    if (patient?.survey?.risk === "urgent") {
      setCarePlan("Immediate follow-up, hydration, rest, and fever monitoring.");
    } else if (patient?.survey?.risk === "watch") {
      setCarePlan("Monitor symptoms, light activity, and check-in in 2 days.");
    } else {
      setCarePlan("");
    }
  }, [selectedPatientId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assigned care plan:", {
      doctor: user.name,
      patient: selectedPatient?.name,
      plan: carePlan,
    });
    alert("Care plan assigned (frontend only)");
    setSelectedPatientId("");
    setSelectedPatient(null);
    setCarePlan("");
  };

  return (
    <div className="container-fluid px-0 bg-light text-dark">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        
        <div
          className="card shadow-sm d-none d-md-block"
          style={{
            width: "320px",
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
              <h2 className="fw-light mb-2">Assign Care Plan</h2>
              <span
                className="badge rounded-pill px-3 py-2 text-dark"
                style={{ backgroundColor: pastelColor }}
              >
                {user?.role?.toUpperCase()}
              </span>
            </header>

            <form
              onSubmit={handleSubmit}
              className="rounded-4 p-4 shadow-sm bg-white border"
            >
              <div className="mb-3">
                <label className="form-label">Select Patient</label>
                <select
                  className="form-select"
                  value={selectedPatientId}
                  onChange={(e) => setSelectedPatientId(e.target.value)}
                  required
                >
                  <option value="">Choose a patient</option>
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedPatient && (
                <div className="mb-4">
                  <h6 className="fw-light">Latest Survey</h6>
                  <ul className="list-unstyled small">
                    <li><strong>Risk:</strong> {selectedPatient.survey.risk}</li>
                    <li><strong>Pain Level:</strong> {selectedPatient.survey.responses.painLevel}</li>
                    <li><strong>Mobility:</strong> {selectedPatient.survey.responses.mobility}</li>
                    <li><strong>Appetite:</strong> {selectedPatient.survey.responses.appetite ? "Yes" : "No"}</li>
                    <li><strong>Temp:</strong> {selectedPatient.survey.responses.fever} F</li>
                  </ul>
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Care Plan</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={carePlan}
                  onChange={(e) => setCarePlan(e.target.value)}
                  placeholder="e.g. Increase hydration, light mobility, follow-up in 3 days"
                  required
                />
              </div>

              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-success rounded-pill px-4"
                >
                  Assign Plan
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AssignCarePlanPage;