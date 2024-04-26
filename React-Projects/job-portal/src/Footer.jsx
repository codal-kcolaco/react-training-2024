import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
