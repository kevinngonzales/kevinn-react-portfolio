import React from "react";

function Pokemon() {
  return (
    <>
      <div className="project2">
        <div className="pokemon-text">
        <img className="project-title"  src="project-titles/pokepokedex-title.png" />
        <div className="git-logo-container">

        <a href="https://github.com/kevinngonzales/week_6_react_with_swr" target="_blank">
            <img className="git-project" src="/button-logos/github-logo.png" />
          </a>

          <a href="https://week-6-react-with-swr.onrender.com" target="_blank"><img className="web-button" src="/button-logos/website-logo.png" /></a>
</div>

          <p>
            A React project that uses data fetching with Axios, promises, and
            SWR (State While Revalidate) to fetch data using React hooks.
            Pokemon data is accessed through <a href="https://pokeapi.co/">PokeAPI</a> and displayed on a webpage
            in an organized and creative manner. Additional functionality
            includes a music player which allows user to press a button to play
            music while browsing through pokemon.
          </p>
          <h3> Technologies </h3>

          <ul>
            <li> Languages: Javascript, HTML, CSS </li>
            <li> IDE: VSCode </li>
            <li> Frameworks/Libraries: React.js </li>
          </ul>
        </div>

        <video className="videos" width="90%" controls>
          <source src="/pokemon-video.mp4" type="video/mp4"></source>
        </video>
      </div>
    </>
  );
}

export default Pokemon;