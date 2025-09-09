import React, { useState } from "react";

function AppointmentCard({ appointment }) {
  const [open, setOpen] = useState(false);

  const statusColor = {
    scheduled: 'info',
    completed: 'success',
    canceled: 'secondary',
    no_show: 'danger'
  };

  return (
    <div className="card shadow-sm border-0 mb-3 h-100">
      <div
        className="card-header"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <h5 className="mb-0">
          <i className="bi bi-calendar-event me-2"></i>Appointment
        </h5>
      </div>
      {open && (
        <div className="card-body">
          <p className="mb-1">
            <i className="bi bi-info-circle me-2"></i>
            <strong>Status:</strong>{' '}
            <span className={`badge bg-${statusColor[appointment.status]}`}>
              {appointment.status}
            </span>
          </p>
          <p className="mb-1">
            <i className="bi bi-clock me-2"></i>
            <strong>Start:</strong> {new Date(appointment.startAt).toLocaleString()}
          </p>
          <p className="mb-1">
            <i className="bi bi-chat-left-text me-2"></i>
            <strong>Notes:</strong> {appointment.notes}
          </p>
          <a
            href={appointment.link}
            className="btn btn-sm btn-outline-primary mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-camera-video me-1"></i>Join Appointment
          </a>
        </div>
      )}
    </div>
  );
}

export default AppointmentCard;