import React, { useEffect, useState } from "react";
import CarePlanCard from "../components/CarePlanCard";
import SurveyCard from "../components/SurveyCard";
import AppointmentCard from "../components/AppointmentCard";
import MetricCard from "../components/MetricCard";
import EmptyCard from "../components/EmptyCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import RecoveryChart from "../components/RecoveryChart.jsx";
import { fetchPatientDashboard } from "../services/api.js";
import { roleColors } from "../assets/color.js";


function PatientDashboardPage() {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatientDashboard()
      .then(setData)
      .catch((err) => console.error("Dashboard fetch failed:", err))
      .finally(() => setLoading(false));
  }, []);

const dailyRecovery = [
  {
    date: "2025-08-30",
    painLevel: 8,
    mobility: 2,
    appetite: "false",
    fever: 101.2,
  },
  {
    date: "2025-08-31",
    painLevel: 7,
    mobility: 2,
    appetite: "false",
    fever: 100.8,
  },
  {
    date: "2025-09-01",
    painLevel: 6,
    mobility: 3,
    appetite: "true",
    fever: 99.9,
  },
  {
    date: "2025-09-02",
    painLevel: 5,
    mobility: 3,
    appetite: "true",
    fever: 99.4,
  },
  {
    date: "2025-09-03",
    painLevel: 4,
    mobility: 4,
    appetite: "true",
    fever: 98.7,
  },
  {
    date: "2025-09-04",
    painLevel: 3,
    mobility: 4,
    appetite: "true",
    fever: 98.6,
  },
  {
    date: "2025-09-05",
    painLevel: 3,
    mobility: 5,
    appetite: "true",
    fever: 98.4,
  },
  {
    date: "2025-09-06",
    painLevel: 2,
    mobility: 5,
    appetite: "true",
    fever: 98.3,
  },
  {
    date: "2025-09-07",
    painLevel: 2,
    mobility: 5,
    appetite: "true",
    fever: 98.2,
  },
  {
    date: "2025-09-08",
    painLevel: 1,
    mobility: 5,
    appetite: "true",
    fever: 98.1,
  },
];

  const pastelColor = data?.user?.role
    ? roleColors[data.user.role.toLowerCase()] || "#f0f0f0"
    : "#f0f0f0";

  if (loading)
    return (
      <div className="text-center mt-5 text-secondary">
        Loading dashboard...
      </div>
    );
  if (!data)
    return <div className="text-center mt-5 text-danger">No data found.</div>;

  return (
    <div className="container-fluid px-0 bg-light text-dark">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div
          className="card shadow-sm d-none d-md-block"
          style={{
            width: "600px",
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
              overflowX: "hidden",
            }}
          >
            <Sidebar user={data.user} roleColors={roleColors} />
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
              <h2 className="fw-light mb-2">Welcome, {data.user.name}</h2>
              <span
                className="badge rounded-pill px-3 py-2 text-dark"
                style={{ backgroundColor: pastelColor }}
              >
                {data.user.role.toUpperCase()}
              </span>
            </header>

            <section id="metrics" className="mb-5">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4">
                  <MetricCard
                    title="Care Plans"
                    value={data.carePlans.length}
                    icon="bi-clipboard-check"
                    color="success"
                  />
                </div>
                <div className="col-sm-6 col-lg-4">
                  <MetricCard
                    title="Surveys"
                    value={data.surveys.length}
                    icon="bi-activity"
                    color="info"
                  />
                </div>
                <div className="col-sm-12 col-lg-4">
                  <MetricCard
                    title="Appointments"
                    value={data.user.appointmentsAsPatient.length}
                    icon="bi-calendar-event"
                    color="warning"
                  />
                </div>
              </div>
            </section>

            <section id="recovery-chart" className="mb-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <RecoveryChart logs={dailyRecovery} />
                </div>
              </div>
            </section>


            <section id="snapshot" className="mb-5">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4">
                  <div className="card rounded-4 shadow-sm border-0">
                    {data.carePlans.length > 0 ? (
                      <CarePlanCard plan={data.carePlans[0]} compact />
                    ) : (
                      <EmptyCard message="No care plan assigned yet. Your provider will update this soon!" />
                    )}
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card rounded-4 shadow-sm border-0">
                    {data.surveys.length > 0 ? (
                      <SurveyCard survey={data.surveys[0]} compact />
                    ) : (
                      <EmptyCard message="No survey submitted yet. You can complete one anytime." />
                    )}
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="card rounded-4 shadow-sm border-0">
                    {data.user.appointmentsAsPatient.length > 0 ? (
                      <AppointmentCard
                        appointment={data.user.appointmentsAsPatient[0]}
                        compact
                      />
                    ) : (
                      <EmptyCard message="No upcoming appointments. Your care team will schedule one soon." />
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section id="appointments">
              {data.user.appointmentsAsPatient.length > 1 ? (
                <div className="row g-4">
                  {data.user.appointmentsAsPatient.slice(1).map((app) => (
                    <div key={app.id} className="col-sm-6 col-lg-4">
                      <div className="card rounded-4 shadow-sm border-0">
                        <AppointmentCard appointment={app} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-secondary fst-italic">
                  No additional appointments scheduled.
                </p>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboardPage;
