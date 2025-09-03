import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "Patient") {
      navigate("/patient-dashboard");
    } else if (role === "Doctor") {
      navigate("/doctor-dashboard");
    } else {
      console.warn("Invalid role selected");
    }
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
        style={{ width: "30rem" }}
      >
        <h2 className="mb-4 text-primary text-center">Sign Up</h2>
        <div className="mb-3 text-start">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            required
          />
        </div>

        <div className="mb-4 text-start">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Please select --</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <hr />
        <div className="mt-3 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-decoration-none text-primary">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
