import React from "react";
import styles from "./TermsAndConditions.module.scss";
import termsAndConditionsContent from "../../data/TermsAndConditionsContent";

const TermsAndConditions = () => {
  return (
    <div className={styles["container"]}>
      {termsAndConditionsContent.map((section, index) => (
        <div key={index}>
          <h1 className={styles["heading"]}>{section.heading}</h1>
          <div className={styles["content"]}>
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
