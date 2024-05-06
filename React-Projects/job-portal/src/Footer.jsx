import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
        <div className="footer-links">
          <a href="about-us">About Us</a>
          <a href="privacy-policy">Privacy Policy</a>
          <a href="terms-and-conditions">Terms and Conditions</a>
          <a href="contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
