import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { roleColors } from "../assets/color.js";
import { useUser } from "../hooks/useUser.js";

function SurveyPage() {
  const { user } = useUser();
  const pastelColor = roleColors[user?.role?.toLowerCase()] || "#f0f0f0";

  const [form, setForm] = useState({
    painLevel: "",
    mobility: "",
    appetite: "",
    fever: "",
    medication: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? e.target.checked : value;
    setForm({ ...form, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey submitted:", form);
   
  };

  return (
    <div className="container-fluid px-0 bg-light text-dark">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
       
        <div
          className="card shadow-sm d-none d-md-block"
          style={{
            width: "500px",
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
            <Sidebar user={user} roleColors={roleColors} />
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
              <h3 className="fw-light mb-2">Daily Check In</h3>
              <span
                className="badge rounded-pill px-3 py-2 text-dark"
                style={{ backgroundColor: pastelColor }}
              >
                {user?.role?.toUpperCase()}
              </span>
            </header>

            <form
              onSubmit={handleSubmit}
              className="rounded-4 p-4 shadow-sm bg-white border row g-4 mt-2"
            >
              <div className="col-md-4">
                <label className="form-label">Pain Level (0-10)</label>
                <input
                  type="number"
                  name="painLevel"
                  className="form-control"
                  value={form.painLevel}
                  onChange={handleChange}
                  min="0"
                  max="10"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Mobility (0-5)</label>
                <input
                  type="number"
                  name="mobility"
                  className="form-control"
                  value={form.mobility}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Appetite</label>
                <select
                  name="appetite"
                  className="form-select"
                  value={form.appetite}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="true">Good</option>
                  <option value="false">Poor</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Temperature (F)</label>
                <input
                  type="number"
                  name="fever"
                  className="form-control"
                  value={form.fever}
                  onChange={handleChange}
                  step="0.1"
                  required
                />
              </div>

              <div className="col-md-8">
                <label className="form-label">Medication Intake</label>
                <input
                  type="text"
                  name="medication"
                  className="form-control"
                  value={form.medication}
                  onChange={handleChange}
                  placeholder="e.g. Ibuprofen 200mg at 9am"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">Notes</label>
                <textarea
                  name="notes"
                  className="form-control"
                  rows="4"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Anything you'd like to share today?"
                />
              </div>

              <div className="col-12 text-end">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SurveyPage;