import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import validateLogin from "../../utils/validateLogin";
import ForgotPasswordModal from "../components/ForgotPasswordModal";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginUser = async ({ email }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes("doctor")) {
          resolve({ role: "doctor" });
        } else if (email.includes("patient")) {
          resolve({ role: "patient" });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await loginUser(formData);
      navigate(`/dashboard/${response.role}`);
    } catch (err) {
      console.error(err);
      setErrors({ email: "Login failed. Please check your credentials." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow"
        style={{ width: "30rem" }}
        aria-label="Login form"
      >
        <h2 className="mb-4 text-primary text-center">Log In</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
            autoFocus
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
            name="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div className="mt-3 text-center">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setShowForgotModal(true)}
          >
            Forgot password?
          </button>
        </div>

        <hr />
        <div className="text-center">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-decoration-none text-primary">
            Sign up
          </Link>
        </div>
      </form>

      {showForgotModal && (
        <ForgotPasswordModal
          onClose={() => setShowForgotModal(false)}
          title="Reset Your Password"
        >
          <p>Enter your email</p>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
          />
          <button className="btn btn-primary w-100">Send Reset Link</button>
        </ForgotPasswordModal>
      )}
    </div>
  );
}

export default LoginPage;
