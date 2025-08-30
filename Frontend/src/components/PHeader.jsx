//Header/content for PATIENT dashbaord

import React from "react";
import { BiSearch, BiNotification } from "react-icons/bi";
import "../styles/pdash.css";

import { useEffect, useState } from "react";

function PHeader() {
  const [patientInstructions, setPatientInstructions] = useState("");

  useEffect(() => {
    // // Patient INSTRUCTIONS Fetched from our backend API
    fetch("/api/instructions")
      .then((res) => res.json())
      .then((data) => {
        setPatientInstructions(data.instructions); // API response
      })
      .catch((err) =>
        console.error("Failed to fetch patient instructions", err)
      );
  }, []);

  // const PHeader = () => {
  return (
    <div className="pheader d-flex justify-content-between align-items-center mb-4">
      <div className="pheadtitle ">Care Instructions: </div>
      <div className="pheader_activ">
        <div className="care_instructs d-flex align-items-center">
          {/* imports instructions data pulled from our database/backend */}
          {patientInstructions
            ? patientInstructions
            : "No Instructions from your care provider"}
        </div>

        <div className="notify">
          <BiNotification className="icon" />

          {/* <button type="notice_button" class="btn btn-danger"> <BiNotification className="icon" />Notifications</button>  */}
        </div>
      </div>
    </div>
  );
}

export default PHeader;
