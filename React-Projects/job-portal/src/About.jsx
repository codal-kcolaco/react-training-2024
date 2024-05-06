import React from "react";
import "./styles/About.scss";
import CJPLogo from "./assets/cjp-logo.png";
import CEOLogo from "./assets/ceo_photo.jpg";
import { aboutUsContent, aboutUsTitle } from "./data/AboutUsContent";

export const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title">{aboutUsTitle.aboutUsTitle}</div>
      <div className="about-us-first-section">
        <img
          loading="lazy"
          src={CJPLogo}
          alt="CJP Logo"
          className="about-us-cjp-logo"
        />
        <div className="about-us-paragraph-container">
          {aboutUsContent.map((content) => (
            <p key={content.id} className="about-us-paragraph">
              {content.text}
            </p>
          ))}
        </div>
      </div>
      <div className="about-us-second-section">
        <img src={CEOLogo} alt="" className="about-us-ceo-logo" />
        <p className="about-us-ceo-title">{aboutUsTitle.aboutUsCeoTitle}</p>
        <p className="about-us-ceo-title">{aboutUsTitle.aboutUsCeoDesc}</p>
      </div>
    </div>
  );
};
