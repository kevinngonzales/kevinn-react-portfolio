import React from "react";

import GithubApiApp from "../projects/GithubApiApp.jsx";

import MemeGenerator from "../projects/MemeGenerator.jsx";

import ReactRefactor from "../projects/ReactRefactor.jsx";

import Pokemon from "../projects/Pokemon.jsx";

import TriviaWebApp from "../projects/TriviaWebApp.jsx";

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
