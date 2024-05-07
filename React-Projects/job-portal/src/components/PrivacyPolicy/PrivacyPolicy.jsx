import React from "react";
import styles from "./PrivacyPolicy.module.scss";
import {
  privacyPolicyContent,
  privacyPolicyTitle,
} from "../../data/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title-heading"]}>{privacyPolicyTitle.heading}</h1>
      <p className={styles["content"]}>{privacyPolicyTitle.content}</p>
      {privacyPolicyContent.map((section, index) => (
        <div key={index}>
          <h2 className={styles["heading"]}>{section.heading}</h2>
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

export default PrivacyPolicy;
