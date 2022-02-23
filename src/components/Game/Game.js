import "./game.css";

function Game() {
  const word = "house";
  const letters = word.split("");

  function Columns() {
    return letters.map(() => {
      return <div className="column"></div>;
    });
  }

  function Rows() {
    return letters.map(() => {
      return (
        <div className="row">
          <Columns />
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
