import React from "react";
import Player from "./Player";
function Game({ playerone, playertwo, id }) {
  // each versus game
  return (
    <div className="game">
      <Player title={playerone} id={id + "0"} name={id} />
      <Player title={playertwo} id={id + "1"} name={id} />
    </div>
  );
}

export default Game;
