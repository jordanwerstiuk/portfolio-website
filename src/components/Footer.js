import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="school-affiliations">
        <div className="school-affiliations-items"></div>
      </section>
      <section className="website-created">
        <p>Website first created with React in May 2024 by Jordan Werstiuk</p>
      </section>
      <section className="contact-me">
        <div>
          <h2>Contact Me:</h2>
          <p className="contact-me-email">Email: jordanwerstiuk@gmail.com</p>
          <p className="contact-me-subtext">
            (LinkedIn and GitHub links are in the top-left)
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
