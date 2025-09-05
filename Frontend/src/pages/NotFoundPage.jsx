import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Sign Up
      </Link>
    </div>
  );
}

export default NotFoundPage;
