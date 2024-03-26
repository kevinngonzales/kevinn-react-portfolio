import React from "react";
import Pokemon from "../projects/Pokemon.jsx";
import MemeGenerator from "../projects/MemeGenerator";
import TriviaWebApp from "../projects/TriviaWebApp";

function Projects() {
  return (
    <>
      <div className="page-container">
       
        <div className="projects-container">
          <div className="card-container">
            <MemeGenerator />
            <Pokemon />
            <TriviaWebApp />
          </div>
        </div>
      </div>



    </>
  );
}

export default Projects;
