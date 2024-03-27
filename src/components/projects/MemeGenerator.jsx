import React from "react";

function MemeGenerator() {
  return (
    <>
      <div className="project1">
        <div className="meme-gen-text">
          <img
            className="project-title"
            src="project-titles/memegen-title.png"
          />

          <div className="github-button-container">
            <a
              href="https://github.com/kevinngonzales/week_5_meme_generator"
              target="_blank"
            >
              <img
                className="git-project"
                src="/button-logos/github-logo.png"
              />
            </a>


          <a href="https://github-api-app-m80q.onrender.com/" target="_blank">
            <img className="web-button" src="/button-logos/website-logo.png" />
          </a>
          </div>
          
          <p>
            A web application that utilizes the{" "}
            <a href="https://imgflip.com/api">Imgflip API</a> to retrieve an
            array of popular memes. The user can click a button to display a
            randomly selected meme image from the API and then type in the
            designated inputs to create a top text and bottom text. Thus, a
            random meme is generated. The possibilities are endless!
          </p>

          <span> Technologies </span>

          <ul>
            <li> Languages: Javascript, HTML, CSS </li>
            <li> IDE: VSCode </li>
            <li> Frameworks/Libraries: React.js, Axios, SWR </li>
          </ul>
        </div>
        <video className="videos" width="90%" controls>
          <source src="/meme-generator-video.mp4" type="video/mp4"></source>
        </video>
      </div>
    </>
  );
}

export default MemeGenerator;
