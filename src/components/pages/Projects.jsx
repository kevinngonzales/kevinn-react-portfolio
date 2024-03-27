import React from "react";
import Pokemon from "../projects/Pokemon.jsx";
import MemeGenerator from "../projects/MemeGenerator";
import TriviaWebApp from "../projects/TriviaWebApp";
import GithubApiApp from "../projects/GithubApiApp.jsx";
import ReactRefactor from "../projects/ReactRefactor.jsx";

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
