import React from "react";
import styles from "./Contact.module.scss";
import contactContent from "../../data/ContactContent";

function Contact() {
  return (
    <div className={styles.class}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form id={styles.form}>
          {contactContent.map((input) => (
            <input
              key={input.id}
              type={input.type}
              id={input.id}
              name={input.name}
              className={styles[input.className]}
              placeholder={input.placeholder}
              required={input.required}
            />
          ))}
          <input type="submit" className={styles.submit} value="Contact" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
