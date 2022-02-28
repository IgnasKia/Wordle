import React from "react";
import { useState, useEffect } from "react";
import "./game.css";
import KeyboardPress from "../Keyboard/KeyboardPress";
import fiveLetterWords from "../words";

function Game() {
  const [word, setWord] = useState(
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]
  );

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

  const isActive = (row, column) => {
    return row === currentRow && column === currentColumn;
  };

  const getColumnBackgroundColor = (row, column) => {
    const letter = rows[row][column];
    if (row >= currentRow) {
      return "black";
    }
    if (letter === letters[column]) {
      return "green";
    }
    if (letters.includes(letter)) {
      return "darkorange";
    }
    return "grey";
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getColumnBackgroundColor(i, j) === color)
    );
  };

  const greenKey = getAllLettersWithColor("green");
  const yellowKey = getAllLettersWithColor("darkorange");
  const greyKey = getAllLettersWithColor("grey");

  const refresh = () => {
    setRows(new Array(word.length).fill(new Array(letters.length).fill("")));
    setCurrentColumn(0);
    setCurrentRow(0);
    setWord(
      fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]
    );
  };

  useEffect(() => {
    if (currentRow > 0) {
      if (checkIfWon()) {
        alert("You guessed correctly!");
        refresh();
      } else if (checkIfLost()) {
        alert(`You lost... Word was : ${word}`);
        refresh();
      }
    }
  }, [currentRow]);

  const checkIfWon = () => {
    const row = rows[currentRow - 1];
    return row.every((letter, i) => letter === letters[i]);
  };

  const checkIfLost = () => {
    return currentRow === rows.length;
  };

  function Rows() {
    return letters.map((array, i) => {
      return (
        <div key={i} className="row">
          {updatedRows.map((letters, j) => {
            return (
              <div
                key={j}
                className="column"
                style={{
                  border: isActive(i, j)
                    ? "1px solid green"
                    : "1px solid white",
                  backgroundColor: getColumnBackgroundColor(i, j),
                }}
              >
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

      <div className="board">
        <div className="container">
          <Rows />
        </div>
      </div>

      <div className="keyboard">
        <KeyboardPress
          keyPressed={keyPressed}
          greenKey={greenKey}
          yellowKey={yellowKey}
          greyKey={greyKey}
        />
      </div>
    </div>
  );
}

export default Game;
