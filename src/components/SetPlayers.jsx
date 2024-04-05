import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increasePlayer,
  decreasePlayer,
  getAllPlayers,
  versusAllPlayers,
  setInitialUpperSecondRound,
  setInitialUpperThirdRound,
} from "../redux/slice";
import PlayerInput from "./PlayerInput";
import Game from "./Game";
function SetPlayers() {
  const dis = useDispatch();
  const noOfplayers = useSelector((state) => state.noOfPlayers);
  const secondUpperPlayers = useSelector((state) => state.secondUpperPlayers);
  const [playerInputs, setPlayerInputs] = useState([]);
  const khelam = useCallback(() => {
    const inputs = document.querySelectorAll(".playerInput input");
    const allPlayersArray = Array.from(inputs).map((input) => input.value);
    console.log(allPlayersArray);
    const versusArray = [];
    for (let i = 0; i < allPlayersArray.length; i += 2) {
      versusArray.push(allPlayersArray.slice(i, i + 2));
    }

    // set all players - no impact
    dis(getAllPlayers({ allPlayers: allPlayersArray }));
    // versusplayers
    dis(versusAllPlayers({ versusPlayers: versusArray }));
    // set upper second Round
    dis(setInitialUpperSecondRound());
    // set upper second Round
    dis(setInitialUpperThirdRound());
  }, []);
  useEffect(() => {
    let tempPlayers = [];
    for (let i = 0; i < noOfplayers; i++) {
      tempPlayers.push(<PlayerInput key={i} id={i} />);
    }
    setPlayerInputs(tempPlayers);
  }, [noOfplayers]);
  return (
    <section className="setPlayersContainer">
      <p>Kati jana khelni? (max 8)</p>
      <div className="playerCount">
        <span className="countButton" onClick={() => dis(decreasePlayer())}>
          -
        </span>
        <span id="noOfPlayer">{noOfplayers}</span>
        <span className="countButton" onClick={() => dis(increasePlayer())}>
          +
        </span>
      </div>
      <div className="setPlayers">{playerInputs}</div>
      <div className="generateButtons">
        <button onClick={khelam}>Khelam</button>
        <button>Random khelam</button>
      </div>
    </section>
  );
}

export default SetPlayers;
