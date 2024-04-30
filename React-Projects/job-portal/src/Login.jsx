import React, { useState } from "react";
import "./styles/Login.scss";
import { loginUser } from "./api";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = async (event) => {
    event.preventDefault();

    try {
      const jwtToken = await loginUser(email, password);
      toast.success("Login successful", {
        onClose: () => (window.location.href = "/"),
        autoClose: 1000,
      });
    } catch (error) {
      toast.error(`${error}`);
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
