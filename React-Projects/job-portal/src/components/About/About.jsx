import React from "react";
import styles from "./About.module.scss";
import CJPLogo from "../../assets/cjp-logo.png";
import CEOLogo from "../../assets/ceo_photo.jpg";
import { aboutUsContent, aboutUsTitle } from "../../data/AboutUsContent";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{aboutUsTitle.aboutUsTitle}</div>
      <div className={styles.firstSection}>
        <img
          loading="lazy"
          src={CJPLogo}
          alt="CJP Logo"
          className={styles["cjp-logo"]}
        />
        <div className={styles.paragraphContainer}>
          {aboutUsContent.map((content) => (
            <p key={content.id} className={styles.paragraph}>
              {content.text}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.secondSection}>
        <img src={CEOLogo} alt="" className={styles.ceoLogo} />
        <p className={styles.ceoTitle}>{aboutUsTitle.aboutUsCeoTitle}</p>
        <p className={styles.ceoTitle}>{aboutUsTitle.aboutUsCeoDesc}</p>
      </div>
    </div>
  );
};
