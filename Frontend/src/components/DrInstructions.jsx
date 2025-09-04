// form for care provider to submit aftercare instructions for a patient in recovery

import React, { useState } from 'react';
import "../styles/drinstructions.css";

const CareInstructionsForm = () => {
  const [careformData, setFormData] = useState({
    patientName: '',
    date: '',
    instructions: '',
    medications: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset errors when typing
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!careformData.patientName.trim()) newErrors.patientName = 'Patient name is required.';
    if (!careformData.date.trim()) newErrors.date = 'Date is required.';
    if (!careformData.instructions.trim()) newErrors.instructions = 'Aftercare instructions are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Patient Aftercare instructions submitted:', careformData);
    setSubmitted(true);   // replace this console.log with an API POST call
 

    // Reset form after submission
    setFormData({
      patientName: '',
      date: '',
      instructions: '',
      medications: '',
    });
  };



return (
  <div className="care-container">
    <h2>Submit Care Instructions</h2>
    {submitted && <p className="care-success">Instructions submitted successfully!</p>}

    <form onSubmit={handleSubmit} className="care-form">
      <label className="care-label">
        Patient Name:
        <input
          type="text"
          name="patientName"
          value={careformData.patientName}
          onChange={handleChange}
          className="care-input"
        />
        {errors.patientName && <span className="care-error">{errors.patientName}</span>}
      </label>

      <label className="care-label">
        Date:
        <input
          type="date"
          name="date"
          value={careformData.date}
          onChange={handleChange}
          className="care-input"
        />
        {errors.date && <span className="care-error">{errors.date}</span>}
      </label>

      <label className="care-label">
        Care Instructions:
        <textarea
          name="instructions"
          value={careformData.instructions}
          onChange={handleChange}
          className="care-textarea"
          rows={5}
        />
        {errors.instructions && <span className="care-error">{errors.instructions}</span>}
      </label>

      <label className="care-label">
        Medications (optional):
        <input
          type="text"
          name="medications"
          value={careformData.medications}
          onChange={handleChange}
          className="care-input"
        />
      </label>

      <button type="submit" className="care-button">Submit</button>
    </form>
  </div>
);
};

export default CareInstructionsForm;