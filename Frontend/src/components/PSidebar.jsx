import React from "react";

import { Link } from "react-router-dom";

import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHeart, BiHeartCircle } from "react-icons/bi";// ICONS installed react-icons with: npm install react-icons --save
import "../styles/psideb.css"

const Psidebar = () => {
  return (
    <div className="psidebar_menu align-items-start flex-column"> 
    {/*d-flex shadow bg-body-tertiary p-3 mb-5 bg-body rounded */}
      

      <div className="logo">
        <h5>Care Tracker Menu</h5>
        
      </div>

      <div className="menu_list d-flex flex-column align-items-start py-3 mb-5">
        <Link to="/" className="list_item mb-3">
            <BiHome className="icons"/>{/* Icons */}   
            <span> Home</span>
        </Link>
        
        {/* daily Survey tab Link to survey page*/}
        <Link to="/dailycheckin" className="list_item mb-3 ">
            <BiHeartCircle className="heart_i" />
            <span> Daily Checkin</span> 
        </Link>

        <a href="#" className="list_item mb-3">
            <BiMessage className="icons"/>
            <span> Chat</span>
        </a>

        <Link to="/emergency" className="list_item mb-3">
             <BiBookAlt className="icons"/>
            <span> Help</span>
        </Link>

      </div>

    </div>
  );
};
export default Psidebar;
