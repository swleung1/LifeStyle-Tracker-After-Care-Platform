import React, { useState } from "react";

function SurveyCard({ survey }) {
  const [open, setOpen] = useState(true);
  const { painLevel, mobility, appetite, fever } = survey.responses;

  const riskColor = {
    ok: "bg-success",
    watch: "bg-warning",
    urgent: "bg-danger"
  };

  return (
    <div className="card shadow-sm mb-3">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <h6 className="mb-0">
          <i className="bi bi-activity me-2"></i>Survey Summary
        </h6>
        <span className={`badge rounded-pill ${riskColor[survey.risk]} text-white`}>
          {survey.risk.toUpperCase()}
        </span>
      </div>
      {open && (
        <div className="card-body small text-muted">
          <div><i className="bi bi-emoji-frown me-2"></i>Pain: {painLevel}/10</div>
          <div><i className="bi bi-person me-2"></i>Mobility: {mobility}/5</div>
          <div><i className="bi bi-heart-pulse me-2"></i>Appetite: {appetite ? "Good" : "Poor"}</div>
          <div><i className="bi bi-thermometer-half me-2"></i>Temp: {fever} F</div>
        </div>
      )}
    </div>
  );
}

export default SurveyCard;