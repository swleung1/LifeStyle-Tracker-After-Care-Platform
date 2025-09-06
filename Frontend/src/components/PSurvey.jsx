import React, { useState } from "react";
// import '"/styles/survey.css";
import "../styles/survey.css";

function PSurvey() {
  const [surveyData, setSurveyData] = useState({
    feeling: "",
    painLevel: 5,
    trackMedication: "",
    sideEffects: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", surveyData);
    setSubmitted(true);
  };

  return (
    
    <div
      style={{ 
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(174, 95, 4, 0.1)"
      }}
    >
      <h2 className="title">Daily Patient Aftercare Check-In</h2>
      {submitted ? (
        <div >
          Thank you for your check-in. We have received your response.
        </div> ) : (
        <form className="sform form-control" onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>How are you feeling today?</label>
            <br />
            <input
              type="text"
              name="feeling"
              value={surveyData.feeling}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
                placeholder="E.g., I'm feeling good, a bit tired, etc."
                   
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Pain level (0 - 10): {surveyData.painLevel}</label>
            <br />
            <input
              type="range"
              name="painLevel"
              min="0"
              max="10"
              value={surveyData.painLevel}
              onChange={handleChange}
            />
          </div>

          {surveyData.painLevel > 7 && (
            <div style={{ marginBottom: "1rem", color: "red" }}>
              Your experiencing high pain levels. Your care provider shoud be in
              contact with you today. However, please contact your care provider
              if this persists.
            </div>
          )}

          <div style={{ marginBottom: "1rem" }}>
            <label>Did you take your medication?</label>
            <br />
            <select
              name="trackMedication"
              value={surveyData.trackMedication}
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Any side effects that you are experiencing?</label>
            <br />
            <textarea
              name="sideEffects"
              value={surveyData.sideEffects}
              onChange={handleChange}
              rows={4}
              style={{ width: "100%" }}
            />
          </div>

          <div >
            <label>
              Is there anything else that you would like for your care provider
              to know today?
            </label>
            <br />
            <textarea
              name="sideEffects"
              value={surveyData.sideEffects}
              onChange={handleChange}
              rows={4}
              style={{ width: "100%" }}
            />
          </div>

          <button className="sbutton" type="submit">
            Submit Check-In
          </button>
        </form>
      )}
    </div>
  );
}

export default PSurvey;
