import { useState, useEffect } from "react";
import "./game.css";
import KeyboardPress from "../Keyboard/KeyboardPress";
function Game() {
  const word = "labas";
  const letters = word.split("");

  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);

  const [rows, setRows] = useState(
    new Array(word.length).fill(new Array(letters.length).fill(""))
  );

  const copyArray = (arr) => {
    return [...arr.map((rows) => [...rows])];
  };

  const updatedRows = copyArray(rows);

  const keyPressed = (key) => {
    if (key === "ENTER") {
      if (currentColumn === rows[0].length) {
        setCurrentRow(currentRow + 1);
        setCurrentColumn(0);
      }
      return;
    }

    if (key === "CLEAR") {
      const prevColumn = currentColumn - 1;
      if (prevColumn >= 0) {
        updatedRows[currentRow][prevColumn] = "";
        setRows(updatedRows);
        setCurrentColumn(prevColumn);
      }
      return;
    }

    if (currentColumn < rows[0].length) {
      updatedRows[currentRow][currentColumn] = key;
      setRows(updatedRows);
      setCurrentColumn(currentColumn + 1);
    }
  };

  function Rows() {
    return letters.map((array, i) => {
      return (
        <div key={i} className="row">
          {updatedRows.map((letters, j) => {
            return (
              <div key={j} className="column">
                <h2 key={i + j} className="letter">
                  {updatedRows[i][j]}
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
      <KeyboardPress keyPressed={keyPressed} />
    </div>
  );
}

export default Game;
