import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import validateSignup from "../../utils/validateSignup";

function SignupPage() {
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
      if (formData.role === "patient") {
        navigate(`/dashboard/${formData.role}`);
      } else if (formData.role === "doctor") {
        navigate(`/dashboard/${formData.role}`);
      } else {
        console.warn("Invalid role selected");
      }
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
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoFocus
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <div className="mb-4 text-start">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            className={`form-select ${errors.role ? "is-invalid" : ""}`}
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">-- Please select --</option>
            <option value="patient">patient</option>
            <option value="doctor">doctor</option>
          </select>
          {errors.role && <div className="invalid-feedback">{errors.role}</div>}
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
