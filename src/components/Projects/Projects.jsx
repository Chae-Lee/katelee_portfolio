import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project title: </strong> {props.title}
          </li>
          <li>
            <strong>Description: </strong> {props.description}
          </li>
          <li>
            <a href={props.link}>
              <button>Click to view project</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
