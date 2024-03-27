import React from "react";

import GithubApiApp from "../PROJECTS/GithubApiApp.jsx";

import MemeGenerator from "../PROJECTS/MemeGenerator.jsx";

import ReactRefactor from "../PROJECTS/ReactRefactor.jsx";

import Pokemon from "../PROJECTS/Pokemon.jsx";

import TriviaWebApp from "../PROJECTS/TriviaWebApp.jsx";

function Projects() {
  return (
    <>
      <div className="page-container">
        <div className="projects-container">
          <div className="card-container">
            <GithubApiApp />
            <MemeGenerator />
            <ReactRefactor />
            <Pokemon />
            <TriviaWebApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
