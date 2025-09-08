//DR ALERTS component - fetches and displays patient alerts from backend (survey triggered)

import React from "react";
import { BiSearch, BiNotification } from "react-icons/bi";
import "../styles/pdash.css";

import { useEffect, useState } from "react";

function Alerts() {
  const [patientAlerts, setPatientAlerts] = useState("");

  useEffect(() => {
    // // Patient INSTRUCTIONS Fetched from our backend API
    fetch("/api/alerts")
      .then((res) => res.json())
      .then((data) => {
        setPatientAlerts(data.alerts); // API response
      })
      .catch((err) =>
        console.error("Failed to fetch patient alerts", err)
      );
  }, []);

  // const PHeader = () => {
  return (
    <div className="pheader d-flex justify-content-between align-items-center mb-4">
      <div className="pheadtitle ">Current Patient Alerts: </div>
      <div className="pheader_activ">
        <div className="care_instructs d-flex align-items-center">
          {/* imports instructions/data pulled from our database/backend */}
          {patientAlerts
            ? patientAlerts
            : "No Alerts"}
        </div>

        
      </div>
    </div>
  );
}
export default Alerts;