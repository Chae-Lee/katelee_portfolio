import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsContainer">
        <h3 id="skillsTitle"> Technical Skills </h3>
        <p>
          {" "}
          The following skill gained through the Frontend Web Development
          bootcamp:{" "}
        </p>
        <li>HTML, CSS, and JavaScript</li>
        <li>Bootstrap, JQuery, JSON </li>
        <li>Frameworks: Node.js, ES6, OOP, React</li>
        <li>
          Manipulate page information and create interactivity using jQuery and
          React
        </li>
        <li>Build modern web applications using Node.js and React</li>
        <li>Deploy web-based applications using Netlify</li>
      </div>
    </div>
  );
};

export default Skills;
