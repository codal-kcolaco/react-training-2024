import React, { useState } from "react";
import styles from "./UserPortal.module.scss";
import AvatarLogo from "../../assets/avatar.png";
import { changePasswordUser } from "../../api/api";
import { toast } from "react-toastify";
import userPortalContent from "../../data/UserPortalContent";

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
    <div className={styles.container}>
      <h1 className={styles.title}>{userPortalContent.pageTitle}</h1>
      <img
        className={styles.avatar}
        src={AvatarLogo}
        alt={userPortalContent.avatarAltText}
      />
      <div className={styles.section}>
        <input
          type="password"
          value={userPassword.oldPassword}
          onChange={(e) => handleChange(e)}
          className={styles.input}
          name="oldPassword"
          placeholder={userPortalContent.oldPasswordPlaceholder}
          required
        />
        <input
          type="password"
          value={userPassword.newPassword}
          onChange={(e) => handleChange(e)}
          className={styles.input}
          name="newPassword"
          placeholder={userPortalContent.newPasswordPlaceholder}
          required
        />
        <input
          onClick={(e) => changePassword(e)}
          className={styles.submit}
          type="submit"
          value={userPortalContent.buttonText}
        />
      </div>
    </div>
  );
};
