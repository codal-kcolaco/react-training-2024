import React, { useEffect, useState } from "react";
import "./styles/Signup.scss";
import { registerUser } from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const registrationForm = (event) => {
    event.preventDefault();

    if (userDetails.password !== userDetails.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    registerUser(userDetails.fullname, userDetails.email, userDetails.password)
      .then(() => {
        toast.success("Registration successful");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(`${error}. Please try again.`);
      });
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
            value={userDetails.fullname}
            onChange={(e) => handleChange(e)}
            className="signup-fullname"
            placeholder="Your Name / Company Name"
            required
          />
          <input
            type="email"
            id="email"
            value={userDetails.email}
            onChange={(e) => handleChange(e)}
            name="email"
            className="signup-email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={userDetails.password}
            onChange={(e) => handleChange(e)}
            className="signup-password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={userDetails.confirm_password}
            onChange={(e) => handleChange(e)}
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
