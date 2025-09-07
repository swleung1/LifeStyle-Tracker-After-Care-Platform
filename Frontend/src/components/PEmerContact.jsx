//Patient Emergency component - fetches and displays care emergency for the patient 

import React from "react";
import { BiSearch, BiNotification } from "react-icons/bi";
import "../styles/pdash.css";

import { useEffect, useState } from "react";

function PEmergency() {
  const [patientEmergency, setPatientEmergency] = useState("");

  useEffect(() => {
    // // Patient EMERGENCY Fetched from our backend API
    fetch("/api/emergency")
      .then((res) => res.json())
      .then((data) => {
        setPatientEmergency(data.emergency); // API response
      })
      .catch((err) =>
        console.error("Failed to fetch patient emergency contact", err)
      );
  }, []); 

  // const PHeader = () => {
  return (
    <div className="pheader d-flex justify-content-between align-items-center mb-4">
      <div className="pheadtitle ">Emeregency Contact: </div>
      <div className="pheader_activ">
        <div className="care_instructs d-flex align-items-center">
          {/* imports emergency/data pulled from our database/backend */}
          {patientEmergency
            ? patientEmergency
            : "No Emergency Contact found on file"}
        </div>

        
      </div>
    </div>
  );
}
export default PEmergency;