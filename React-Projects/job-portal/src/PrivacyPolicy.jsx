import React from "react";
import "./styles/PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <div className="privacy-policy-content">
        <p>Welcome to CJP's Privacy Policy page!</p>
        <p>
          This Privacy Policy describes how CJP ("we", "us", or "our") collects,
          uses, and shares information when you use our website or services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information from you when you register on our site, place
          an order, subscribe to our newsletter, respond to a survey, or fill
          out a form.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We may use the information we collect from you to personalize your
          experience, improve our website, process transactions, send periodic
          emails, and more.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies.
        </p>
        <h2>Changes to Our Privacy Policy</h2>
        <p>
          If we decide to change our privacy policy, we will update the Privacy
          Policy modification date below.
        </p>
        <p>
          This policy was last modified on{" "}
          <span className="privacy-policy-date">May 3, 2024</span>.
        </p>
        <h2>Contacting Us</h2>
        <p>
          If there are any questions regarding this privacy policy, you may
          contact us using the information below.
        </p>
        <p>
          CJP
          <br />
          Bodakdev, Ahmedabad
          <br />
          info@cjp.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
