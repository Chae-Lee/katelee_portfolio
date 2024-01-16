import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <div className="projects">
      <div className="card">
        <div className="img-container">
          <img id="projectImage" alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <p>
              <strong>Project title: </strong> {props.title}
            </p>
            <p>
              <strong>Description: </strong> {props.description}
            </p>
            <p>
              <a href={props.link}>
                <button id="button">Click to view project</button>
              </a>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
