import React, { useState } from "react";
import "./styles/UserPortal.scss";
import AvatarLogo from "./assets/avatar.png";
import { changePasswordUser } from "./api";
import { toast } from "react-toastify";
import userPortalContent from "./data/UserPortalContent";

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
      .then(() => {
        toast.success(userPortalContent.successMessage);
      })
      .catch((error) => {
        toast.error(`${userPortalContent.errorMessage}: ${error}`);
      });
  };

  return (
    <div className="user-portal-container">
      <h1 className="user-portal-title">{userPortalContent.pageTitle}</h1>
      <img
        className="user-portal-avatar"
        src={AvatarLogo}
        alt={userPortalContent.avatarAltText}
      />
      <div className="user-portal-section">
        <input
          type="password"
          value={userPassword.oldPassword}
          onChange={(e) => handleChange(e)}
          className="user-portal-input"
          name="oldPassword"
          placeholder={userPortalContent.oldPasswordPlaceholder}
          required
        />
        <input
          type="password"
          value={userPassword.newPassword}
          onChange={(e) => handleChange(e)}
          className="user-portal-input"
          name="newPassword"
          placeholder={userPortalContent.newPasswordPlaceholder}
          required
        />
        <input
          onClick={(e) => changePassword(e)}
          className="user-portal-submit"
          type="submit"
          value={userPortalContent.buttonText}
        />
      </div>
    </div>
  );
};
