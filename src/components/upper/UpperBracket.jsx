import React from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
function UpperBracket() {
  const versusArray = useSelector((state) => state.versusPlayers);
  const secondUpperPlayers = useSelector((state) => state.secondUpperPlayers);
  const upperFinalPlayers = useSelector((state) => state.upperFinalPlayers);
  const thirdUpperLoserPlayers = useSelector(
    (state) => state.thirdUpperLoserPlayers
  );
  const secondUpperLoserPlayers = useSelector(
    (state) => state.secondUpperLoserPlayers
  );
  console.log("third loesrs", thirdUpperLoserPlayers);
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
            {allPlayers.length == 8 ? (
              <Game
                playerone={secondUpperLoserPlayers[0][0]}
                playertwo={secondUpperLoserPlayers[0][1]}
                id={`uppersecondloser`}
              />
            ) : (
              ""
            )}
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
            {allPlayers.length == 8 ? (
              <Game
                playerone={thirdUpperLoserPlayers[0][0]}
                playertwo={thirdUpperLoserPlayers[0][1]}
                id={`upperthirdloser`}
              />
            ) : (
              ""
            )}
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
