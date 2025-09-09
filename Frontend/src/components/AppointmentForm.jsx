import React, { useState } from "react";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduling appointment:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-4 p-4 shadow-sm bg-white border">
      <div className="mb-3">
        <label className="form-label">Doctor</label>
        <select
          name="doctor"
          className="form-select"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select a doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Lee">Dr. Lee</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Time</label>
        <input
          type="time"
          name="time"
          className="form-control"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Reason for Visit</label>
        <textarea
          name="reason"
          className="form-control"
          rows="3"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Describe your symptoms or concerns..."
          required
        />
      </div>

      <button type="submit" className="btn btn-primary rounded-pill px-4">
        Schedule
      </button>
    </form>
  );
}

export default AppointmentForm;