import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validateSignup from "../../utils/validateSignup";
import { useUser } from "../hooks/useUser.js";

function SignupPage() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignup(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (formData.role === "patient" || formData.role === "doctor") {
        setUser({
          name: formData.name,
          email: formData.email,
          role: formData.role,
        });

        navigate(`/dashboard/${formData.role}`);
      } else {
        console.warn("Invalid role selected");
      }
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg rounded-4 overflow-hidden"
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "linear-gradient(to right, #f0f4ff, #ffffff)",
        }}
      >
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center p-5">
          <i className="bi bi-heart-pulse-fill text-primary fs-1 mb-3"></i>
          <h4 className="text-primary fw-bold px-3 text-center">
            Empowering Aftercare Recovery
          </h4>
          <p className="text-muted text-center mt-2 px-3">
            Your trusted platform for safe patient recovery and wellness
            management.
          </p>
        </div>

        <div className="col-12 col-md-6 p-5">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center text-primary">Sign Up</h2>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control rounded-3 ${
                  errors.name ? "is-invalid" : ""
                }`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control rounded-3 ${
                  errors.email ? "is-invalid" : ""
                }`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control rounded-3 ${
                  errors.password ? "is-invalid" : ""
                }`}
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                id="role"
                name="role"
                className={`form-select rounded-3 ${
                  errors.role ? "is-invalid" : ""
                }`}
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">-- Please select --</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
              {errors.role && (
                <div className="invalid-feedback">{errors.role}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 rounded-pill py-2"
            >
              Register
            </button>

            <div className="text-center mt-4">
              <span>Already have an account? </span>
              <Link
                to="/login"
                className="text-decoration-none text-primary fw-semibold"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
