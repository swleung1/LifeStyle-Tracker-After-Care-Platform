// Navbar - Patient Navbar

import React from "react";

import { useEffect, useState } from "react";

function Navbar() {
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    // Patient NAME Fetch from your backend API
    fetch("/api/patient")
      .then((res) => res.json())
      .then((data) => {
        setPatientName(data.name); // API response
      })
      .catch((err) => console.error("Failed to fetch patient name", err));
  }, []);

  // const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-success mt-4 mb-4 px-4 py-3 shadow rounded-pill"
      style={{ borderRadius: "50px" }}
    >
      <a className="navbar-brand text-white fw-bold" href="#">
        {/* imports patent name data pulled from our database/backend */}
        Welcome {patientName ? patientName : "Patient"}!
      </a>

      
    </nav>
  );
}

//export to App
export default Navbar;
