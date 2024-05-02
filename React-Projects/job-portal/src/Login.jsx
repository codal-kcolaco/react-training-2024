import React, { useState } from "react";
import "./styles/Login.scss";
import { loginUser } from "./api";
import { toast } from "react-toastify";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const loginForm = (event) => {
    event.preventDefault();

    loginUser(userDetails.email, userDetails.password)
      .then((jwtToken) => {
        toast.success("Login successful", {
          onClose: () => (window.location.href = "/"),
          autoClose: 1000,
        });
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return (
    <div className="login-class">
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
          <input
            type="email"
            id="email"
            value={userDetails.email}
            onChange={(e) => handleChange(e)}
            className="login-email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            id="password"
            value={userDetails.password}
            onChange={(e) => handleChange(e)}
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
