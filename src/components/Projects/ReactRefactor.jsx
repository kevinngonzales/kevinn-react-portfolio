import React from 'react'

function ReactRefactor() {
  return (
    <>
    <div className="project1">
      <div className="meme-gen-text">

          <img className="project-title" src="project-titles/react-refactor-title.png" />

<div className='github-button-container'>
        <a href="https://github.com/kevinngonzales/classroom-average-react-refactor" target="_blank">
          <img className="git-project" src="/button-logos/github-logo.png" />
        </a>

        <a href="" target="_blank"><img className="web-button" src="/button-logos/website-logo.png" /></a>
</div>
        <p>
        A simple web application for managing student grades. User can input student data which gets rendered in a table. User can then calculate the average of all the student's grades.
        </p>

        <span> Technologies </span>

        <ul>
          <li> Languages: Javascript, HTML, CSS </li>
          <li> IDE: VSCode </li>
          <li> Frameworks/Libraries: React.js </li>
        </ul>
      </div>
      <video className="videos" width="90%" controls>
        <source src="/classroom-average-react-refactor-video.mp4" type="video/mp4"></source>
      </video>
    </div>
  </>
  )
}

export default ReactRefactor