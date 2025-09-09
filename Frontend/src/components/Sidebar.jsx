import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { roleColors } from "../assets/color";
import { useUser } from "../hooks/useUser.js";

function Sidebar() {
  const { user } = useUser();

  const navigate = useNavigate();
  const role = user?.role?.toLowerCase() || "guest";
  const pastelColor = roleColors[role] || "#f0f0f0";

  const handleLogout = () => {
    navigate("/login");
  };

  const navItems = {
    patient: [
      {
        to: "/dashboard/patient",
        icon: "bi-house-door",
        label: "Home",
      },
      {
        to: "/survey",
        icon: "bi-clipboard-check",
        label: "Daily Survey",
      },
      {
        to: "/appointment",
        icon: "bi-calendar",
        label: "Appointment",
      },
    ],
    doctor: [
      {
        to: "/dashboard/doctor",
        icon: "bi-house-door",
        label: "Home",
      },

      {
        to: "/patients",
        icon: "bi-people",
        label: "Patient List",
      },
      {
        to: "/assign-care",
        icon: "bi-journal-medical",
        label: "Assign Care Plan",
      },

      {
        to: "/doctor-profile",
        icon: "bi-journal-medical",
        label: "Assign Care Plan",
      },

       {
        to: "/patient-profile",
        icon: "bi-journal-medical",
        label: "Assign Care Plan",
      },
    ],
  };

  return (
    <aside
      className="d-none d-md-block p-3"
      style={{
        backgroundColor: pastelColor,
        minHeight: "100vh",
        width: "320px",
        overflowX: "hidden",
      }}
    >
      <div className="text-center mb-4">
        <i className="bi bi-person-circle fs-2 text-secondary"></i>
        <h6 className="mt-2 mb-0">{user?.name || "Guest"}</h6>
        <span
          className="badge rounded-pill bg-white text-dark mt-1 px-3 py-1"
          style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}
        >
          {role.toUpperCase()}
        </span>
      </div>

      <nav className="d-flex flex-column gap-3">
        {(navItems[role] || []).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `d-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm w-100 text-decoration-none ${
                isActive ? "bg-primary bg-opacity-25 fw-bold" : "bg-white"
              }`
            }
            style={{ whiteSpace: "nowrap" }}
          >
            <i className={`bi ${item.icon} fs-5 text-muted`}></i>
            <span className="fw-light">{item.label}</span>
          </NavLink>
        ))}

        <button
          className="btn btn-outline-danger w-100 mt-4 d-flex align-items-center justify-content-center gap-2"
          onClick={handleLogout}
          style={{ whiteSpace: "nowrap" }}
        >
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
