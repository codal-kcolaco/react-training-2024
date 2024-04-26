import React, { useState } from "react";
import "./styles/Login.scss";
import { loginUser } from "./api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = async (event) => {
    event.preventDefault();

    try {
      const jwtToken = await loginUser(email, password);
      alert("Login successful");
      window.location.href = "/"; // Redirect to homepage after successful login
    } catch (error) {
      alert(`${error}. Please try again.`);
    }
  };

  return (
    <div className="login-class">
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="login-email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            id="password"
            value={password}
            onChange={(p) => {
              setPassword(p.target.value);
            }}
            type="password"
            name="password"
            className="login-password"
            placeholder="Password"
            required
          />
          <input
            onClick={loginForm}
            className="login-submit"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
