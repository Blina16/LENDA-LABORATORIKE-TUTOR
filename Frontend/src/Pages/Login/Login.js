import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AuthForm.css";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || data?.message || "Login failed");

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("role", data.user?.role || role);
      localStorage.setItem("email", data.user?.email || email);

      alert("Logged in successfully!");

      const userRole = data.user?.role || role;
      if (userRole === "admin") navigate("/admin");
      else if (userRole === "tutor") navigate("/tutor");
      else navigate("/student");
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="welcome-badge">Welcome back</div>
          <h2 className="auth-title">Sign in to your account</h2>
          <p className="auth-subtitle">Access your dashboard and continue learning</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label className="auth-label">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              required
            />
          </div>

          <div>
            <label className="auth-label">Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              required
            />
          </div>

          <div>
            <label className="auth-label">Login as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="auth-select"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>

          <button type="submit" className="auth-button">Log In</button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/Signup" className="auth-signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
