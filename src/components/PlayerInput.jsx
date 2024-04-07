import React from "react";

function PlayerInput({ id }) {
  // initial page
  return (
    <div
      className={`playerInput ${
        id % 2 == 0 ? "evenPlayerInput" : "oddPlayerInput"
      }`}
    >
      {id % 2 != 0 ? <span className="versus"></span> : ""}
      <input type="text" />
      {id % 2 == 0 ? <span className="versus"></span> : ""}
    </div>
  );
}

export default PlayerInput;
