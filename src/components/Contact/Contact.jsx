import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? <br />
          Feel free to reach out through my socials below — I’d love to hear from you.
        </p>

        <div className="contact-socials">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/crl.dsigns/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@crl.dsigns"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Tiktok
          </a>
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=subacarlo431@email.com&su=Project%20Inquiry&body=Hi%20Carlo,"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Email
          </a>
        </div>

        <p className="contact-footer">
          © {new Date().getFullYear()} Carlo Justine Suba — All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
