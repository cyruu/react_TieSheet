import React from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
function UpperBracket() {
  const versusArray = useSelector((state) => state.versusPlayers);
  const secondUpperPlayers = useSelector((state) => state.secondUpperPlayers);
  const upperFinalPlayers = useSelector((state) => state.upperFinalPlayers);
  const secondUpperLoserPlayers = useSelector(
    (state) => state.secondUpperLoserPlayers
  );
  console.log("sec losers", secondUpperLoserPlayers);
  const allPlayers = useSelector((state) => state.allPlayers);
  const thirdUpperPlayers = useSelector((state) => state.thirdUpperPlayers);

  return (
    <div className="upperBracket">
      <h1>Upper Bracket</h1>
      <div className="upperGames">
        <div className="first">
          <p>First round</p>
          <div className="firstUpperBracket">
            {versusArray.map((versus, i) => (
              <Game
                key={i}
                playerone={versus[0]}
                playertwo={versus[1]}
                id={`upperFirst${i}`}
              />
            ))}
          </div>
        </div>
        {/* second round */}
        {secondUpperPlayers.length > 0 && allPlayers.length == 8 ? (
          <div className="second">
            <p>second round</p>
            <div className="secondUpperBracket">
              {secondUpperPlayers.map((versus, i) => (
                <Game
                  key={i}
                  playerone={versus[0]}
                  playertwo={versus[1]}
                  id={`upperSecond${i}`}
                />
              ))}
            </div>
            {allPlayers.length == 8 ? <Game /> : ""}
          </div>
        ) : (
          ""
        )}
        {/* third round */}
        {thirdUpperPlayers.length > 0 ? (
          <div className="third">
            <p>third round</p>
            <div className="thirdUpperBracket">
              {thirdUpperPlayers.map((versus, i) => (
                <Game
                  key={i}
                  playerone={versus[0]}
                  playertwo={versus[1]}
                  id={`upperThird${i}`}
                />
              ))}
            </div>
            {allPlayers.length == 8 ? <Game /> : ""}
          </div>
        ) : (
          ""
        )}
        {/* upper finals */}
        {upperFinalPlayers.length > 0 ? (
          <div className="upperFinal">
            <p>upper finals</p>
            <div className="upperFinalBracket">
              {upperFinalPlayers.map((versus, i) => (
                <Game
                  key={i}
                  playerone={versus[0]}
                  playertwo={versus[1]}
                  id={`upperFinal${i}`}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UpperBracket;
