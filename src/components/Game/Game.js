import { useState } from "react";
import "./game.css";
import KeyboardPress from "../Keyboard/KeyboardPress";
function Game() {
  const word = "labas";
  const letters = word.split("");

  const [currentRow, setCurrentRow] = useState("");
  const [currentColumn, setcurrentColumn] = useState("");

  const [rows, setRows] = useState(
    new Array(word.length).fill(new Array(letters.length).fill(""))
  );

  const copyArray = (arr) => {
    return [...arr.map((rows) => [...rows])];
  };

  const updatedRows = copyArray(rows);

  function Rows() {
    return letters.map((array, i) => {
      return (
        <div key={i} className="row">
          {letters.map((array, j) => {
            return (
              <div key={j} className="column">
                <h2 key={i + j} className="letter">
                  {array}
                </h2>
              </div>
            );
          })}
        </div>
      );
    });
  }

  const keyPressed = (key) => {
    console.log(key);
  };

  return (
    <div className="game-content">
      <div className="title">
        <h1>Vordlis</h1>
      </div>
      <div className="container">
        <Rows />
      </div>
      <KeyboardPress keyPressed={keyPressed} />
    </div>
  );
}

export default Game;
