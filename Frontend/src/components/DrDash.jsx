// This page is for: Rendering the Care Providers Dashboard & structuring the layout of the dashboard LAYOUT File
import react from "react";
import { BiNotification } from "react-icons/bi";

import DrNavbar from "./DrNavbar";
import Drsidebar from "./Drsidebar";
import Drcards from "./Drcards";
import "../styles/drdash.css";
// import "../styles/pdash.css";

const DrDash = () => {
  return (
    // DR Dash and LAYOUT
    <div className="drdash">
      <Drsidebar />

      <div
        className="dr_dashboard-view mx-4 p-4 bg-light rounded shadow"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* DrHeader */}
        <div className="dr-header d-flex justify-content-between align-items-end mb-4">
          {/* <div className="notify-dr">
            <BiNotification className="icon" />
        </div> */}
        </div>

        {/* DR Cards - content */}
        <Drcards />
      </div>

      {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
  );
};

export default DrDash;
