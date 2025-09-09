import React from "react";

function MetricCard({ title, value, icon, color }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 bg-light text-center p-3 h-100">
      <div className={`text-${color} fs-3 mb-2`}>
        <i className={`bi ${icon}`}></i>
      </div>
      <h6 className="text-secondary fw-semibold">{title}</h6>
      <div className="fs-4 fw-bold text-dark">{value}</div>
    </div>
  );
}

export default MetricCard;
