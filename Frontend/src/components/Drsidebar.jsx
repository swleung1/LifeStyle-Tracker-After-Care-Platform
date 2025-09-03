// Drsidebar.jsx - Care Provider Sidebar Component /////

import React, { useState } from "react";
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHeart, BiHeartCircle, BiUser, BiCalendar, BiUserCheck, BiError } from "react-icons/bi";
import "../styles/drsideb.css"

// Main Sidebar or Dashboard Component
const Drsidebar = () => {
  const [metrics, setMetrics] = useState({
    activePatients: 0,
    needAttention: 3,
    todayChecks: 7,
    totalPatients: 30,
    openChats: 5
  });

  return (
    <div className="psidebar_menu align-items-start flex-column">
      <div className="logo">
        <h5>Care Tracker Menu</h5>
      </div>

      <div className="menu_list d-flex flex-column align-items-start py-3 mb-5">
        {/* Home Link */}
        <a href="#" className="list_item mb-3">
          <BiHome className="icons" />
          <span> Home  </span>
        </a>

        {/* Daily Check-in */}
       <a href="#" className="list_item mb-3">
          <BiHeartCircle className="heart_i" />
          <span> Patients' Checkins({metrics.todayChecks})</span>
        </a>

        {/* Alert */}
        <a href="#" className="list_item mb-3">
          <BiMessage className="icons" />
          <span> Alert ({metrics.needAttention})</span>
        </a>

        {/* Patients */}
        <a href="#" className="list_item mb-3">
          <BiBookAlt className="icons" />
          <span> Current Patients ({metrics.totalPatients})</span>
        </a>

       < a href="#" className="list_item mb-3">
          <BiBookAlt className="icons" />
          <span> Open Chat ({metrics.openChats})</span>
        </a>
      </div>
    </div>
  );
};

export default Drsidebar;