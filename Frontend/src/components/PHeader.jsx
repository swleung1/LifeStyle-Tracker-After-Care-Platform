//Header for PATIENT dashbaord - display patient 

import React from "react";
import { BiSearch, BiNotification } from "react-icons/bi";
import "../styles/pdash.css";

// import { useEffect, useState } from "react";

// function PHeader() {
//   const [patientInstructions, setPatientInstructions] = useState("");

//   useEffect(() => {
//     // // Patient INSTRUCTIONS Fetched from our backend API
//     fetch("/api/instructions")
//       .then((res) => res.json())
//       .then((data) => {
//         setPatientInstructions(data.instructions); // API response
//       })
//       .catch((err) =>
//         console.error("Failed to fetch patient instructions", err)
//       );
//   }, []);

const PHeader = () => {
  return (
    <div className="pheader d-flex justify-content-between align-items-end mb-4">
   
{/* Notification button for inner dash- not needed */}
        {/* <div className="notify">
          <BiNotification className="icon" />
        </div> */}

      </div>
    // </div>
  );
}

export default PHeader;
