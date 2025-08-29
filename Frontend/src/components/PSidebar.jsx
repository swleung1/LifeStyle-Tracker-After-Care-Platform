import React from "react";

import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHeart, BiHeartCircle } from "react-icons/bi";// ICONS installed react-icons with: npm install react-icons --save

const Psidebar = () => {
  return (
    <div className="psidebar_menu container align-items-start flex-column"> 
    {/*d-flex shadow bg-body-tertiary p-3 mb-5 bg-body rounded */}
      

      <div className="logo">
        <h5>Care Tracker Menu</h5>
        
      </div>

      <div className="menu_list d-flex flex-column align-items-start py-3 mb-5">
        <a href="#" className="list_item mb-3">
            
            <BiHome className="icons"/>{/* Icons */}   
            <span> Home</span>
        </a>
        <a href="#" className="list_item mb-3 ">
            <BiHeartCircle className="heart_i" />
            <span> Daily Checkin</span> 
        </a>{/* Wellness Survey Link to page*/}
        <a href="#" className="list_item mb-3">
            <BiMessage className="icons"/>
            <span> Chat</span>
        </a>

        <a href="#" className="list_item mb-3">
             <BiBookAlt className="icons"/>
            <span> Help</span>
        </a>

      </div>

    </div>
  );
};
export default Psidebar;
