import React from "react";
import styles from "./Footer.module.scss";
import { footerLink, footerContent } from "../../data/FooterContent";

function Footer() {
  return (
    <footer className={styles["container"]}>
      <div className={styles["content"]}>
        <p>&copy; {footerContent.footerDesc}</p>
        <div className={styles["links"]}>
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
