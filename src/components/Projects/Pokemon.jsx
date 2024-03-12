import React from "react";

function Pokemon() {
  return (
    <>
      <div className="project2">
        <div className="pokemon-text">
          <h2>POKEMON POKEDEX</h2>

          <span> <a href="https://github.com/kevinngonzales/week_6_react_with_swr">GitHub Link</a></span>

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
