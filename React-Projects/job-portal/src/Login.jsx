import React from "react";
import "./styles/Login.css";

function Login() {
  return (
    <div className="login-class">
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
          <input
            type="email"
            id="email"
            className="login-email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            id="password"
            type="password"
            name="password"
            className="login-password"
            placeholder="Password"
            required
          />
          <input className="login-submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
