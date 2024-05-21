import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./UserPortal.module.scss";
import AvatarLogo from "../../assets/avatar.png";
import { changePasswordUser } from "../../api/api";
import { toast } from "react-toastify";
import userPortalContent from "../../data/UserPortalContent";

interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export const UserPortal: React.FC = () => {
  const [userPassword, setUserPassword] = useState<UserPassword>({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserPassword({
      ...userPassword,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const changePassword = (event: FormEvent<HTMLFormElement> | MouseEvent) => {
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
          onChange={handleChange}
          className={styles.input}
          name="oldPassword"
          placeholder={userPortalContent.oldPasswordPlaceholder}
          required
        />
        <input
          type="password"
          value={userPassword.newPassword}
          onChange={handleChange}
          className={styles.input}
          name="newPassword"
          placeholder={userPortalContent.newPasswordPlaceholder}
          required
        />
        <input
          onClick={() => changePassword}
          className={styles.submit}
          type="submit"
          value={userPortalContent.buttonText}
        />
      </div>
    </div>
  );
};
