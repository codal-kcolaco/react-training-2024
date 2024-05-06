import React, { useState } from "react";
import "./styles/Signup.scss";
import { registerUser } from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import signUpContent, { signUpError } from "./data/SignUpContent";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
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
      alert(signUpError.passwordErrorMessage);
      return;
    }

    registerUser(userDetails.fullname, userDetails.email, userDetails.password)
      .then(() => {
        toast.success(signUpError.registrationSuccessfulMessage);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(`${error}. ${signUpError.tryAgainLaterMessage}`);
      });
  };

  return (
    <div className="signup-class">
      <div className="signup-container">
        <h2>Register</h2>
        <form id="registrationForm">
          {signUpContent.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              id={field.name}
              value={userDetails[field.name]}
              onChange={(e) => handleChange(e)}
              className={`signup-${field.name}`}
              placeholder={field.placeholder}
              required={field.required}
            />
          ))}
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
