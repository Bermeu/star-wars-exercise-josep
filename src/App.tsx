import React from "react";
import Starship from "./components/Starship/Starship";
import StarshipsType from "./types/StarshipsType";
import StarshipType from "./types/StarshipType";

import "./css/App.css";

function App() {
  let starships: StarshipType[];
  (async () => {
    const response = await fetch(`https://swapi.dev/api/starships/`);
    const totalStarships: StarshipsType = await response.json();
    starships = totalStarships.results.map(
      (ship: StarshipType): StarshipType => {
        return { name: ship.name, model: ship.model };
      }
    );
    console.log(starships);
  })();

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: </p>
        <h2>Starships by class:</h2>
        <ul>
          <li>
            <Starship />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
