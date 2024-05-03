import React, { useEffect, useState } from "react";
import "./styles/Contact.scss";

function Contact() {
  return (
    <div className="contact-class">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="contact-fullname"
            placeholder="Your Name / Company Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className="contact-email"
            placeholder="Email Address"
            required
          />
          <input
            type="address"
            name="address"
            id="address"
            className="contact-address"
            placeholder="Address"
            required
          />
          <input
            type="issue"
            name="issue"
            id="issue"
            className="contact-issue"
            placeholder="What can we do to help you ?"
            required
          />

          <input
            type="submit"
            className="contact-submit"
            value="Contact"
            // onClick={contactForm}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
