import React from "react";
import "./styles/Contact.scss";
import contactContent from "./data/ContactContent";

function Contact() {
  return (
    <div className="contact-class">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form id="contactForm">
          {contactContent.map((input) => (
            <input
              key={input.id}
              type={input.type}
              id={input.id}
              name={input.name}
              className={input.className}
              placeholder={input.placeholder}
              required={input.required}
            />
          ))}
          <input type="submit" className="contact-submit" value="Contact" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
