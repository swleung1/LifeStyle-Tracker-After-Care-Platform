import React, { useState } from "react";

function ForgotPasswordModal({ onClose, title }) {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleReset = () => {
    if (!email) return;

    setStatusMessage(`A reset link has been sent to ${email}`);
    setShowAlert(true);

    
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
         
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

         
          <div className="modal-body">
            <label className="form-label">Enter your email</label>
            <input
              type="email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            {showAlert && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                {statusMessage}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() => setShowAlert(false)}
                ></button>
              </div>
            )}
          </div>

          
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReset}
              disabled={!email}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;