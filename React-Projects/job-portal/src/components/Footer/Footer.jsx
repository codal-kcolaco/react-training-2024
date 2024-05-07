import React from "react";
import "./Footer.scss";
import { footerLink, footerContent } from "../../data/FooterContent";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {footerContent.footerDesc}</p>
        <div className="footer-links">
          {footerLink.map((link) => (
            <a key={link.id} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
