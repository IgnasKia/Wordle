import "./keyboardPress.css";

function KeyboardPress({ keyPressed }) {
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

  return (
    <div className="row-buttons">
      {keys.map((key) => {
        return (
          <button key={key} onClick={() => keyPressed(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default KeyboardPress;
