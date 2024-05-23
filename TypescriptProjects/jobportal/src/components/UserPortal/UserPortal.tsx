import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  MouseEvent,
} from "react";
import styles from "./UserPortal.module.scss";
import AvatarLogo from "../../assets/avatar.png";
import { changePasswordUser, getUser } from "../../api/api";
import { toast } from "react-toastify";
import userPortalContent from "../../data/UserPortalContent";

interface User {
  name?: string;
  email?: string;
  user_type?: string;
}
interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export const UserPortal: React.FC = () => {
  const [userData, setUserData] = useState<User>({});
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

  const changePassword = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    changePasswordUser(userPassword.oldPassword, userPassword.newPassword)
      .then(() => {
        toast.success(userPortalContent.successMessage);
      })
      .catch((error) => {
        toast.error(`${userPortalContent.errorMessage}: ${error}`);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setUserData(data);
      } catch (error) {
        alert(`${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={AvatarLogo}
        alt={userPortalContent.avatarAltText}
      />
      <h1 className={styles.title}>{userData.name}</h1>
      <p className={styles.userType}>{userData.user_type}</p>
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
