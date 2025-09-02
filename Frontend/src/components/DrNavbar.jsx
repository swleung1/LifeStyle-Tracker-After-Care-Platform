// Navbar - Medical Pro Navbar

import React from "react";
import { useEffect, useState } from "react";

function  DrNavbar() {
  const [drName, setDrName] = useState("");

  useEffect(() => {
    // Dr NAME Fetch from your backend API
    fetch("/api/dr")
      .then((res) => res.json())
      .then((data) => {
        setDrName(data.name); // API response
      })
      .catch((err) => console.error("Failed to fetch Dr name", err));
  }, []);

 return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-success mt-4 mb-4 px-4 py-3 shadow rounded-pill"
      style={{ borderRadius: "50px" }}
    >
      <a className="navbar-brand text-white bg fw-bold" href="#">
        {/* imports patent name data pulled from our database/backend */}
        Welcome {drName ? drName : "Care Provider"}!
      </a>


    </nav>
  );
}

//export to App
export default DrNavbar 