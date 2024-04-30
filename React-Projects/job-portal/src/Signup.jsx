import React, { useEffect, useState } from "react";
import "./styles/Signup.scss";
import { registerUser } from "./api";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const registrationForm = async (event) => {
    event.preventDefault();

    if (password !== confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser(fullname, email, password);
      alert("Registration successful");
    } catch (error) {
      alert(`${error}. Please try again.`);
    }
  };

  return (
    <div className="signup-class">
      <div class="signup-container">
        <h2>Register</h2>
        <form id="registrationForm">
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            className="signup-fullname"
            placeholder="Your Name / Company Name"
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className="signup-email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="signup-password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={confirm_password}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="signup-confirm-password"
            placeholder="Confirm Password"
            required
          />
          <input
            type="submit"
            className="signup-submit"
            value="Register"
            onClick={registrationForm}
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
