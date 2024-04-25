import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import CJPLogo from "./assets/cjp-logo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("jwt_token="));
    setIsLoggedIn(!!jwtCookie);
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
        <nav>
          <ul>
            <li>
              <a href="jobs">Jobs</a>
            </li>
            <li>
              <a href="post-job">Post a Job</a>
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
        <div id="user-avatar-container">
          <img className="user-avatar" src="images/wallpaper.png" alt="" />
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
