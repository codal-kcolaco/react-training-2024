import React, { useState } from "react";
import "./styles/Login.scss";
import { loginUser } from "./api";
import { toast } from "react-toastify";
import { loginConstant } from "./data/LoginContent";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const loginForm = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const jwtToken = await loginUser(userDetails.email, userDetails.password);
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
    <div className="login-class">
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={loginForm}>
          {loginConstant.map((input, index) => (
            <input
              key={index}
              type={input.type}
              id={input.id}
              value={userDetails[input.name]}
              onChange={handleChange}
              className={`login-${input.name}`}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
            />
          ))}
          <input
            className="login-submit"
            type="submit"
            value={loading ? "Logging In..." : "Login"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
