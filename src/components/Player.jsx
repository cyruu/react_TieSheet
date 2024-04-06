import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  winnerOfUpperFirst0,
  winnerOfUpperFirst1,
  winnerOfUpperFirst2,
  winnerOfUpperFirst3,
  winnerOfUpperSecond0,
  winnerOfUpperSecond1,
  winnerOfUpperSecondLoser,
  winnerOfUpperThird,
  winnerOfUpperThirdLoser,
  winnerOfLowerFirst0,
  winnerOfLowerFirst1,
  winnerOfLowerSecond,
  winnerOfLowerThird,
  winnerOfUpperFinal,
} from "../redux/slice";
function Player({ title, id, name }) {
  const dis = useDispatch();
  function handleRadioClicked(id) {
    return function () {
      const selectedRadioButton = document.getElementById(`radio${id}`);
      const radioId = selectedRadioButton.id;
      let loserIndex = "";
      if (radioId[radioId.length - 1] == "0") loserIndex = "1";
      else loserIndex = "0";
      //winner of uppperFirst0
      if (radioId.includes("upperFirst0")) {
        dis(
          winnerOfUpperFirst0({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of uppperFirst1
      else if (radioId.includes("upperFirst1")) {
        dis(
          winnerOfUpperFirst1({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of uppperFirst2
      else if (radioId.includes("upperFirst2")) {
        dis(
          winnerOfUpperFirst2({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of uppperFirst3
      else if (radioId.includes("upperFirst3")) {
        dis(
          winnerOfUpperFirst3({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of uppperSecond0
      else if (radioId.includes("upperSecond0")) {
        dis(
          winnerOfUpperSecond0({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of uppperSecond1
      else if (radioId.includes("upperSecond1")) {
        dis(
          winnerOfUpperSecond1({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of upper second loser
      else if (radioId.includes("uppersecondloser")) {
        dis(
          winnerOfUpperSecondLoser({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of upper upperThird
      else if (radioId.includes("upperThird")) {
        dis(
          winnerOfUpperThird({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of upper upperThirdloser
      else if (radioId.includes("upperthirdloser")) {
        dis(
          winnerOfUpperThirdLoser({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }
      //winner of upper final
      else if (radioId.includes("upperFinal")) {
        dis(
          winnerOfUpperFinal({
            winner: radioId[radioId.length - 1],
            loser: loserIndex,
          })
        );
      }

      // winner of lower first 0
      else if (radioId.includes("lowerFirst0")) {
        dis(
          winnerOfLowerFirst0({
            winner: radioId[radioId.length - 1],
          })
        );
      }
      // winner of lower first 1
      else if (radioId.includes("lowerFirst1")) {
        dis(
          winnerOfLowerFirst1({
            winner: radioId[radioId.length - 1],
          })
        );
      }
      // winner of lower second
      else if (radioId.includes("lowerSecond")) {
        dis(
          winnerOfLowerSecond({
            winner: radioId[radioId.length - 1],
          })
        );
      }
      // winner of lower third
      else if (radioId.includes("lowerThird")) {
        dis(
          winnerOfLowerThird({
            winner: radioId[radioId.length - 1],
          })
        );
      }
    };
  }
  return (
    <div className="player">
      <label
        className="playerName"
        htmlFor={`radio${id}`}
        onClick={handleRadioClicked(id)}
      >
        {title}
        <input type="radio" name={name} id={`radio${id}`} />
      </label>
    </div>
  );
}

export default Player;
