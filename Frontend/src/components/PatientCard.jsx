import React from "react";

const PatientCard = ({ patient }) => {
  const { user, condition, carePlan, survey, appointments } = patient;

  const nextAppointment = appointments.find((a) => a.status === "scheduled");

  return (
    <div className="card rounded-4 shadow-sm border-0 p-3 bg-light">
      <h5 className="mb-1">{user.name}</h5>
      <p className="text-muted small mb-2">{condition}</p>

      <div className="mb-2">
        <strong>Care Plan:</strong>{" "}
        {carePlan ? (
          carePlan.title
        ) : (
          <span className="text-secondary">None</span>
        )}
      </div>

      <div className="mb-2">
        <strong>Survey:</strong>{" "}
        {survey ? (
          <>
            Pain: {survey.responses.painLevel}, Mobility:{" "}
            {survey.responses.mobility}, Temp: {survey.responses.fever} F
          </>
        ) : (
          <span className="text-secondary">No survey submitted</span>
        )}
      </div>

      <div>
        <strong>Next Appointment:</strong>{" "}
        {nextAppointment ? (
          <span>{new Date(nextAppointment.startAt).toLocaleString()}</span>
        ) : (
          <span className="text-secondary">None scheduled</span>
        )}
      </div>
    </div>
  );
};

export default PatientCard;
