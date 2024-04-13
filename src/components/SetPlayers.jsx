import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increasePlayer,
  decreasePlayer,
  getAllPlayers,
  versusAllPlayers,
  setInitialUpperSecondRound,
  setInitialUpperThirdRound,
  setInitialUpperFinal,
  setInitialLowerVersus,
  setInitialLowerSecondRound,
  setInitialLowerThirdRound,
} from "../redux/slice";
import PlayerInput from "./PlayerInput";

function SetPlayers() {
  const dis = useDispatch();
  const noOfplayers = useSelector((state) => state.noOfPlayers);

  const [playerInputs, setPlayerInputs] = useState([]);
  const khelam = useCallback((e) => {
    const inputs = document.querySelectorAll(".playerInput input");
    let allPlayersArray = Array.from(inputs).map((input) => input.value);
    const buttonId = e.target.id;

    const versusArray = [];

    if (buttonId == "randomKhelam") {
      allPlayersArray = allPlayersArray.sort(() => Math.random() - 0.6);
    }
    for (let i = 0; i < allPlayersArray.length; i += 2) {
      versusArray.push(allPlayersArray.slice(i, i + 2));
    }
    // versusplayers
    dis(versusAllPlayers({ versusPlayers: versusArray }));
    // set all players - no impact
    dis(getAllPlayers({ allPlayers: allPlayersArray }));
    // set upper second Round
    dis(setInitialUpperSecondRound());
    // set upper second Round
    dis(setInitialUpperThirdRound());
    // set upper final
    dis(setInitialUpperFinal());
    // set lower first stage
    dis(setInitialLowerVersus());
    // set lower second stage
    dis(setInitialLowerSecondRound());
    // set lower third stage
    dis(setInitialLowerThirdRound());

    // hide this and show brackets
    const setPlayersContainer = document.querySelector(".setPlayersContainer");
    setPlayersContainer.style.opacity = "0";
    setPlayersContainer.style.pointerEvents = "none";
  }, []);
  //random khelam
  const randomKhelam = useCallback(() => {}, []);
  useEffect(() => {
    let tempPlayers = [];
    for (let i = 0; i < noOfplayers; i++) {
      tempPlayers.push(<PlayerInput key={i} id={i} />);
    }
    setPlayerInputs(tempPlayers);
  }, [noOfplayers]);
  return (
    <section className="setPlayersContainer">
      <p
        className="numberPlayer   "
        style={{ fontSize: "2.3rem", fontWeight: "bold" }}
      >
        Number&nbsp; Of&nbsp; Players?&nbsp;
      </p>
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
        <button onClick={khelam} className="generateButton" id="khelam">
          Khelam
        </button>
        <button onClick={khelam} className="generateButton" id="randomKhelam">
          Random khelam
        </button>
      </div>
    </section>
  );
}

export default SetPlayers;
