// Navbar - Patient Navbar

import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-success mt-4 mb-4 px-4 py-3 shadow rounded-pill"
      style={{ borderRadius: '50px' }}
    >
      <a className="navbar-brand text-white fw-bold" href="#">
        Patient Dashboard
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Daily Checkin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
             Chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-white-50" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

//export to App
export default Navbar;
