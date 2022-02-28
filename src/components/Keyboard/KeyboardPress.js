import React from "react";
import "./keyboardPress.css";

function KeyboardPress({
  keyPressed,
  greenKey = [],
  greyKey = [],
  yellowKey = [],
}) {
  const keys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "CLEAR",
    "ENTER",
  ];

  function keyBackgroundColor(key) {
    if (greenKey.includes(key)) {
      return "green";
    }
    if (greyKey.includes(key)) {
      return "grey";
    }
    if (yellowKey.includes(key)) {
      return "darkOrange";
    }
    return "darkgrey";
  }

  return (
    <div className="row-buttons">
      {keys.map((key) => {
        return (
          <button
            key={key}
            onClick={() => keyPressed(key)}
            style={{
              backgroundColor: keyBackgroundColor(key),
            }}
          >
            {key.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default KeyboardPress;
