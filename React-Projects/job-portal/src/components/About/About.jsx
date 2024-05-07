import React from "react";
import styles from "./About.module.scss";
import CJPLogo from "../../assets/cjp-logo.png";
import CEOLogo from "../../assets/ceo_photo.jpg";
import { aboutUsContent, aboutUsTitle } from "../../data/AboutUsContent";

export const About = () => {
  console.log(styles);
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>{aboutUsTitle.aboutUsTitle}</div>
      <div className={styles["first-section"]}>
        <img
          loading="lazy"
          src={CJPLogo}
          alt="CJP Logo"
          className={styles["cjp-logo"]}
        />
        <div className={styles["paragraph-container"]}>
          {aboutUsContent.map((content) => (
            <p key={content.id} className={styles["paragraph"]}>
              {content.text}
            </p>
          ))}
        </div>
      </div>
      <div className={styles["second-section"]}>
        <img src={CEOLogo} alt="" className={styles["ceo-logo"]} />
        <p className={styles["ceo-title"]}>{aboutUsTitle.aboutUsCeoTitle}</p>
        <p className={styles["ceo-title"]}>{aboutUsTitle.aboutUsCeoDesc}</p>
      </div>
    </div>
  );
};
