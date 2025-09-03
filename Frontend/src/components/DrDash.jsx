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
      {/* Dr sidebar  */}
      {/* <DrNavbar />  */}
      <Drsidebar />

      <div className="dr_dashboard-view mx-4 p-4 bg-light rounded shadow">
    {/* DrHeader */}
    <div className="dr-header d-flex justify-content-between align-items-end mb-4">
        <div className="notify-dr">
            <BiNotification className="icon" />
          </div>
          </div>
          
        {/* DR Cards - content */}
        <div className=" mb-4 ">
            
          <Drcards />
        </div>
      </div>

      {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
  );
};

export default DrDash;
