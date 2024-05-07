import React, { useState } from "react";
import styles from "./Signup.module.scss";
import { registerUser } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import signUpContent, { signUpError } from "../../data/SignUpContent";

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
    <div className={styles["class"]}>
      <div className={styles["container"]}>
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
              className={styles[field.name]}
              placeholder={field.placeholder}
              required={field.required}
            />
          ))}
          <input
            type="submit"
            className={styles["submit"]}
            value="Register"
            onClick={registrationForm}
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
