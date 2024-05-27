import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Signup.module.scss";
import { registerUser } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import signUpContent, {
  signUpError,
  signUpSelect,
} from "../../data/SignUpContent";

interface UserDetails {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
}

const Signup: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "APPLICANT",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const registrationForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userDetails.password !== userDetails.confirmPassword) {
      alert(signUpError.passwordErrorMessage);
      return;
    }

    registerUser(
      userDetails.fullname,
      userDetails.email,
      userDetails.password,
      userDetails.userType
    )
      .then(() => {
        toast.success(signUpError.registrationSuccessfulMessage);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(`${error}. ${signUpError.tryAgainLaterMessage}`);
      });
  };

  return (
    <div className={styles.class}>
      <div className={styles.container}>
        <h2>Register</h2>
        <form id="registrationForm" onSubmit={registrationForm}>
          {signUpContent.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              id={field.name}
              value={userDetails[field.name as keyof UserDetails]}
              onChange={handleChange}
              className={styles[field.name]}
              placeholder={field.placeholder}
              required={field.required}
            />
          ))}
          <select
            className={styles.userType}
            id={signUpSelect.id}
            value={userDetails[signUpSelect.name as keyof UserDetails]}
            onChange={handleChange}
            name={signUpSelect.name}
            required={signUpSelect.required}
          >
            {signUpSelect.options.map((optionValue, idx) => (
              <option key={idx} value={optionValue.name}>
                {optionValue.value}
              </option>
            ))}
          </select>
          <input type="submit" className={styles.submit} value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
