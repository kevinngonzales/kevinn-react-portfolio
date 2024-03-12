import React from "react";

function TriviaWebApp() {
  return (
    <>
      <div className="project3">
        <div className="trivia-text">
        <h2>RANDOM TRIVIA!</h2>

        <p>
          A Web Application that utilizes <a href="https://opentdb.com/">Open Trivia DB's</a> API to retrieve a
          collection of Trivia Questions/Answers and displays the data as an
          interactive website. Additional functionality includes a music player which allows user to press a button to play music and respective sound effects when a questions is answered either correctly or incorrectly.
        </p>

        <h3> Technologies </h3>

        <ul>
          <li> Languages: Javascript, HTML, CSS </li>
          <li> IDE: VSCode </li>
        </ul>
      </div>

      <video className="videos" width="90%" controls>
          <source src="/trivia-web-app-video.mp4" type="video/mp4"></source>
        </video>


      </div>
    </>
  );
}

export default TriviaWebApp;
