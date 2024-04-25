import React, { useState } from "react";
import "./styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = (event) => {
    event.preventDefault();

    var requestBody = {
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        const jwtToken = data.jwt;

        document.cookie = `jwt_token=${jwtToken}; expires=${new Date(
          Date.now() + 86400 * 1000
        ).toUTCString()}; path=/`;
        alert("Login successful");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(`${error}. Please try again.`);
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
