import React from 'react'

function GithubApiApp() {
  return (
    <>
    <div className="project1">
      <div className="meme-gen-text">

          <img className="project-title" src="project-titles/github-api-app-title.png" />

<div className='github-button-container'>
        <a href="https://github.com/kevinngonzales/github-api-app" target="_blank">
          <img className="git-project" src="/button-logos/github-logo.png" />
        </a>

        <a href="https://github-api-app-m80q.onrender.com/"><img className="web-button" src="/button-logos/website-logo.png" /></a>
</div>
        <p>
        An application that uses Authentication with Passport.js which utilizes the Github API to fetch user profiles and repos. User can login or signup through Github. Users can also view and search for other Github users.
        </p>

        <span> Technologies </span>

        <ul>
          <li> Languages: Javascript, HTML, CSS </li>
          <li> IDE: VSCode </li>
          <li> Frameworks/Libraries: React.js, Express </li>
          <li> Database: MongoDB </li>
        </ul>
      </div>
      <video className="videos" width="90%" controls>
        <source src="/github-app-api-video.mp4" type="video/mp4"></source>
      </video>
    </div>
  </>
  )
}

export default GithubApiApp