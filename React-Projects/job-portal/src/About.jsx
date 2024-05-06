import React from "react";
import "./styles/About.scss";
import CJPLogo from "./assets/cjp-logo.png";
import CEOLogo from "./assets/ceo_photo.jpg";

export const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title">About Us</div>
      <div className="about-us-first-section">
        <img
          loading="lazy"
          src={CJPLogo}
          alt="CJP Logo"
          className="about-us-cjp-logo"
        />
        <div className="about-us-paragraph-container">
          <p className="about-us-paragraph">
            Welcome to CJP – your premier destination for connecting job seekers
            with employment opportunities and helping businesses find the
            perfect candidates to fill their vacancies. At CJP, we understand
            the importance of finding the right fit for both job seekers and
            employers, and we're dedicated to making the job search and
            recruitment process as seamless and efficient as possible.
          </p>
          <p className="about-us-paragraph">
            Founded with a passion for bridging the gap between employers and
            job seekers, CJP was established with the vision of creating a
            platform where individuals can pursue their career goals and
            businesses can find the talent they need to thrive. With a
            user-friendly interface and robust features, our platform empowers
            users to navigate the job market with confidence and ease.
          </p>
          <p className="about-us-paragraph">
            Whether you're a recent graduate, seasoned professional, or someone
            looking for a career change, CJP offers a diverse range of job
            opportunities to suit your skills, experience, and career
            aspirations. Our comprehensive job listings span various industries,
            sectors, and job functions, ensuring that you can find the perfect
            job that aligns with your interests and goals. From full-time
            positions to freelance gigs, remote work opportunities to part-time
            jobs, CJP provides access to a wide array of employment options to
            meet your needs.
          </p>
        </div>
      </div>
      <div className="about-us-second-section">
        <img src={CEOLogo} alt="" className="about-us-ceo-logo" />
        <p className="about-us-ceo-title">Kevin Colaco</p>
        <p className="about-us-ceo-title">Creator of CJP</p>
      </div>
    </div>
  );
};
