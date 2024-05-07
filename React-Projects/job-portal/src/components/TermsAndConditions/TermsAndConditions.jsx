import React from "react";
import "./TermsAndConditions.scss";
import termsAndConditionsContent from "../../data/TermsAndConditionsContent";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      {termsAndConditionsContent.map((section, index) => (
        <div key={index}>
          <h1 className="terms-and-conditions-heading">{section.heading}</h1>
          <div className="terms-and-conditions-content">
            {section.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
