 //Header/content for PATIENT dashbaord

import React from "react";
import { BiSearch, BiNotification } from "react-icons/bi";
import "../styles/pdash.css"

const PHeader = () => {
  return (
    <div className="pheader d-flex justify-content-between align-items-center mb-4">
      <h2 className="pheadtitle ">Patient Dashboard</h2>
      <div className="pheader_activ">
        <div className="search-bar d-flex align-items-center">
          {/* OPTIONAL Search bar for dash */}
          {/* <input type="text" placeholder="Search Here..."></input>
          <BiSearch className="H_icon" /> */}
        </div>

        <div className="notify">
           <BiNotification className="icon" />
           
          {/* <button type="notice_button" class="btn btn-danger"> <BiNotification className="icon" />Notifications</button>  */}
         
         
        </div>

      </div>
    </div>
  );
};

export default PHeader;
