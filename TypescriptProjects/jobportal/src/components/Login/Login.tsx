import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Login.module.scss";
import { loginUser } from "../../api/api";
import { toast } from "react-toastify";
import { loginConstant } from "../../data/LoginContent";
import { useDispatch } from "react-redux";

interface UserDetails {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const loginForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await loginUser(userDetails.email, userDetails.password, dispatch);
      toast.success("Login successful", {
        onClose: () => (window.location.href = "/"),
        autoClose: 1000,
      });
    } catch (error) {
      toast.error(`${error}`);
    }

    setLoading(false);
  };

  return (
    <div className={styles.class}>
      <div className={styles.container}>
        <h2>Login</h2>
        <form id="loginForm" onSubmit={loginForm}>
          {loginConstant.map((input, index) => (
            <input
              key={index}
              type={input.type}
              id={input.id}
              value={userDetails[input.name as keyof UserDetails]}
              onChange={handleChange}
              className={styles[`${input.name}`]}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
            />
          ))}
          <input
            className={styles.submit}
            type="submit"
            value={loading ? "Logging In..." : "Login"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
