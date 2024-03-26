import React from "react";
import Pokemon from "../projects/Pokemon";
import MemeGenerator from "../projects/MemeGenerator";
import TriviaWebApp from "../projects/TriviaWebApp";

function Projects() {
  return (
    <>
      <div className="page-container">
        <div className="title-wrapper">
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
        </div>

        <div className="projects-container">
          <div className="card-container">
            <MemeGenerator />
            <Pokemon />
            <TriviaWebApp />
          </div>
        </div>
      </div>

      <div className="title-wrapper">
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
          <div className="projects-title"> PROJECTS </div>
        </div>

    </>
  );
}

export default Projects;
