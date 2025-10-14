import React from "react";
import "../App.css";

const StudentCard = ({ name, age, image, projectLink }) => {
  return (
    <div className="student-card">
      <img src={image} alt={name} className="student-image" />
      <div className="student-info">
        <h2 className="student-name">{name}</h2>
        <p className="student-age">Age: {age}</p>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
