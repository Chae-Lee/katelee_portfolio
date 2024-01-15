/*[ ] Contact:
[ ] Must have contact information
[ ] Have a contact form for handling events */

import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="logo">
        <a href="mailto:katelee1129@gmail.com" target="_blank">
          <i className="bi bi-envelope text-dark"></i>
        </a>
      </div>
      <div className="logo">
        <a href="https://www.linkedin.com/in/kate-chaerin-lee" target="_blank">
          <i className="bi bi-linkedin text-dark"></i>
        </a>
      </div>
      <div className="logo">
        <a href="https://github.com/Chae-Lee" target="_blank">
          <i className="bi bi-github text-dark"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
