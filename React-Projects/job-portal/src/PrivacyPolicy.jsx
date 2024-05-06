import React from "react";
import "./styles/PrivacyPolicy.scss";
import privacyPolicyContent from "./data/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      {privacyPolicyContent.map((section, index) => (
        <div key={index}>
          <h2 className="privacy-policy-heading">{section.heading}</h2>
          <div className="privacy-policy-content">
            {section.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
