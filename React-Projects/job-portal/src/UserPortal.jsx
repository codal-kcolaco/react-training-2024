import React, { useState } from "react";
import "./styles/UserPortal.scss";
import AvatarLogo from "./assets/avatar.png";
import { changePasswordUser } from "./api";
import { toast } from "react-toastify";

export const UserPortal = () => {
  const [userPassword, setUserPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserPassword({
      ...userPassword,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const changePassword = (event) => {
    event.preventDefault();

    changePasswordUser(userPassword.oldPassword, userPassword.newPassword)
      .then((jwtToken) => {
        toast.success("Password changed successfully");
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return (
    <div className="user-portal-container">
      <img className="user-portal-avatar" src={AvatarLogo} />
      <div className="user-portal-section">
        <input
          type="text"
          value={userPassword.oldPassword}
          onChange={(e) => handleChange(e)}
          className="user-portal-input"
          name="oldPassword"
          placeholder="Enter Old Password"
          required
        />
        <input
          type="text"
          value={userPassword.newPassword}
          onChange={(e) => handleChange(e)}
          className="user-portal-input"
          name="newPassword"
          placeholder="Enter New Password"
          required
        />
        <input
          onClick={(e) => changePassword(e)}
          className="user-portal-submit"
          type="submit"
          value="Change Password"
        />
      </div>
    </div>
  );
};
