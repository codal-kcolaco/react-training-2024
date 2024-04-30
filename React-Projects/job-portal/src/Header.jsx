import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import CJPLogo from "./assets/cjp-logo.png";
import AvatarLogo from "./assets/avatar.png";
import { JWT_COOKIE } from "./Constants";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/post-job">Post a Job</a>
            </li>
            <li>
              <a href="/my-jobs/">My Jobs</a>
            </li>
            <li>
              <a href="/my-applications/">My Applications</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {!isLoggedIn && (
        <div className="nav-button-wrapper">
          <a href="signup" className="sign-up-button">
            Sign-up
          </a>
          <a href="login" className="login-button">
            Login
          </a>
        </div>
      )}
      {isLoggedIn && (
        <div className="user-avatar-container">
          <img className="user-avatar" src={AvatarLogo} alt="" />
          <a
            className="logout-button"
            id="logout-button"
            onClick={handleLogout}
          >
            Logout
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
