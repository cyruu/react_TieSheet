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
  winnerOfLoserFinal,
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
      const winnerIndex = radioId[radioId.length - 1];
      //winner of uppperFirst0
      const label = document.getElementById("label" + id);
      const labelIndex = label.id[label.id.length - 1];
      label.classList.remove("labelloser");
      label.classList.add("labelwinner");
      if (labelIndex == "0") {
        const newId = label.id.slice(0, label.id.length - 1) + "1";
        const anotherLabel = document.getElementById(newId);
        anotherLabel.classList.remove("labelwinner");
        anotherLabel.classList.add("labelloser");
      } else if (labelIndex == "1") {
        const newId = label.id.slice(0, label.id.length - 1) + "0";
        const anotherLabel = document.getElementById(newId);
        anotherLabel.classList.remove("labelwinner");
        anotherLabel.classList.add("labelloser");
      }
      // all reducers
      if (radioId.includes("upperFirst0")) {
        dis(
          winnerOfUpperFirst0({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of uppperFirst1
      else if (radioId.includes("upperFirst1")) {
        dis(
          winnerOfUpperFirst1({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of uppperFirst2
      else if (radioId.includes("upperFirst2")) {
        dis(
          winnerOfUpperFirst2({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of uppperFirst3
      else if (radioId.includes("upperFirst3")) {
        dis(
          winnerOfUpperFirst3({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of uppperSecond0
      else if (radioId.includes("upperSecond0")) {
        dis(
          winnerOfUpperSecond0({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of uppperSecond1
      else if (radioId.includes("upperSecond1")) {
        dis(
          winnerOfUpperSecond1({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of upper second loser
      else if (radioId.includes("uppersecondloser")) {
        dis(
          winnerOfUpperSecondLoser({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of upper upperThird
      else if (radioId.includes("upperThird")) {
        dis(
          winnerOfUpperThird({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of upper upperThirdloser
      else if (radioId.includes("upperthirdloser")) {
        dis(
          winnerOfUpperThirdLoser({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }
      //winner of upper final
      else if (radioId.includes("upperFinal")) {
        dis(
          winnerOfUpperFinal({
            winner: winnerIndex,
            loser: loserIndex,
          })
        );
      }

      // winner of lower first 0
      else if (radioId.includes("lowerFirst0")) {
        dis(
          winnerOfLowerFirst0({
            winner: winnerIndex,
          })
        );
      }
      // winner of lower first 1
      else if (radioId.includes("lowerFirst1")) {
        dis(
          winnerOfLowerFirst1({
            winner: winnerIndex,
          })
        );
      }
      // winner of lower second
      else if (radioId.includes("lowerSecond")) {
        dis(
          winnerOfLowerSecond({
            winner: winnerIndex,
          })
        );
      }
      // winner of lower third
      else if (radioId.includes("lowerThird")) {
        dis(
          winnerOfLowerThird({
            winner: winnerIndex,
          })
        );
      }
      //winner of losers final
      else if (radioId.includes("loserFinal")) {
        dis(
          winnerOfLoserFinal({
            winner: winnerIndex,
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
        id={`label${id}`}
      >
        {title}
        <input type="radio" name={name} id={`radio${id}`} />
      </label>
    </div>
  );
}

export default Player;
