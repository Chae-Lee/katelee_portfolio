import React from "react";

function Header(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("AboutMe")}
          className={
            props.currentPage === "AboutMe" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#skills"
          onClick={() => props.handlePageChange("Skills")}
          className={
            props.currentPage === "Skills" ? "nav-link active" : "nav-link"
          }
        >
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => props.handlePageChange("Projects")}
          className={
            props.currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Header;
