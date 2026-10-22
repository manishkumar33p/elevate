
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // ADMIN LOGIN
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "Elevate@123";

    if (
      username.trim() === ADMIN_USERNAME &&
      password === ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("elevateAdminLoggedIn", "true");

      navigate("/admin");
    } else {
      setError("Invalid admin username or password.");
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          <img src="/logo.jpg" alt="Elevate Infra" />
        </div>

        <span className="admin-login-label">
          ELEVATE INFRA
        </span>

        <h1>Admin Login</h1>

        <p>
          Secure access to the Elevate Infra
          management panel.
        </p>

        <form onSubmit={handleLogin}>

          <div className="admin-field">
            <label>Username</label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter admin username"
              autoComplete="username"
              required
            />
          </div>

          <div className="admin-field">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button type="submit">
            Login to Admin
            <span>↗</span>
          </button>

        </form>

        <div className="admin-login-back">
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            ← Back to Website
          </button>
        </div>

      </div>

    </div>
  );
}
