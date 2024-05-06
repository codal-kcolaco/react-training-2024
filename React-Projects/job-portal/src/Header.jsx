import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import CJPLogo from "./assets/cjp-logo.png";
import AvatarLogo from "./assets/avatar.png";
import { JWT_COOKIE } from "./Constants";
import { useNavigate } from "react-router-dom";
import { navContent, navItems } from "./data/HeaderContent";

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
    <header className="nav-header">
      <div className="nav-wrapper">
        <a href="/">
          <img loading="lazy" src={CJPLogo} alt="" />
        </a>
        <nav className="nav-list">
          <ul className="nav-unordered-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {!isLoggedIn && (
        <div className="nav-button-wrapper">
          <a href="signup" className="sign-up-button">
            {navContent.signUp}
          </a>
          <a href="login" className="login-button">
            {navContent.login}
          </a>
        </div>
      )}
      {isLoggedIn && (
        <div className="user-avatar-container">
          <img
            onClick={() => {
              navigate("user-portal");
            }}
            className="user-avatar"
            src={AvatarLogo}
            alt=""
          />
          <a
            className="logout-button"
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
