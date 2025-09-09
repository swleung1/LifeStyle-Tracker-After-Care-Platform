import React, { useState } from "react";

function CarePlanCard({ plan }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card shadow-sm border-0 mb-3 h-100">
      <div
        className="card-header text-success"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <h5 className="mb-0">
          <i className="bi bi-clipboard-check me-2"></i>{plan.title}
        </h5>
      </div>
      {open && (
        <div className="card-body">
          <p className="card-text text-muted">Instructions:</p>
          <ul className="list-group list-group-flush">
            {plan.instructions.map((inst) => (
              <li key={inst.id} className="list-group-item px-0 py-1">
                <span className={`badge bg-${inst.urgency === 'high' ? 'danger' : inst.urgency === 'medium' ? 'warning' : 'secondary'} me-2`}>
                  {inst.urgency}
                </span>
                {inst.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CarePlanCard;
