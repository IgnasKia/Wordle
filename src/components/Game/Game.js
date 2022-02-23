import { useState } from "react";
import "./game.css";

function Game() {
  const word = "labas";
  const letters = word.split("");

  const [currentRow, setCurrentRow] = useState("0");
  const [currentColumn, setcurrentColumn] = useState("0");

  function Rows() {
    return letters.map((array, i) => {
      return (
        <div key={i} className="row">
          {letters.map((array, j) => {
            return (
              <div key={j} className="column">
                <h2 key={i + j} className="letter">
                  {i}
                  {j}
                </h2>
              </div>
            );
          })}
        </div>
      );
    });
  }

  return (
    <div className="game-content">
      <div className="title">
        <h1>Vordlis</h1>
      </div>
      <div className="container">
        <Rows />
      </div>
    </div>
  );
}

export default Game;
