import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import CJPLogo from "../../assets/cjp-logo.png";
import AvatarLogo from "../../assets/avatar.png";
import { JWT_COOKIE } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { navContent, navItems } from "../../data/HeaderContent";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!JWT_COOKIE);
  }, []);

  const handleLogout = () => {
    document.cookie =
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href="/">
          <img loading="lazy" src={CJPLogo} alt="" />
        </a>
        <nav className={styles.list}>
          <ul className={styles.unorderedList}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {!isLoggedIn && (
        <div className={styles.buttonWrapper}>
          <a href="signup" className={styles.signUpButton}>
            {navContent.signUp}
          </a>
          <a href="login" className={styles.loginButton}>
            {navContent.login}
          </a>
        </div>
      )}
      {isLoggedIn && (
        <div className={styles.userAvatarContainer}>
          <img
            onClick={() => {
              navigate("user-portal");
            }}
            className={styles.userAvatar}
            src={AvatarLogo}
            alt=""
          />
          <a
            className={styles.logoutButton}
            id="logout-button"
            onClick={handleLogout}
          >
            {navContent.logout}
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
