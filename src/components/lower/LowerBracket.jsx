import React from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
function LowerBracket() {
  const lowerVersusPlayers = useSelector((state) => state.lowerVersusPlayers);
  // console.log(lowerVersusPlayers);
  const secondLowerPlayers = useSelector((state) => state.secondLowerPlayers);
  const thirdLowerPlayers = useSelector((state) => state.thirdLowerPlayers);
  // const forthLowerPlayers = useSelector((state) => state.forthLowerPlayers);
  const lowerFinalPlayers = useSelector((state) => state.lowerFinalPlayers);
  const grandFinalPlayers = useSelector((state) => state.grandFinalPlayers);
  console.log("grand final", grandFinalPlayers);
  return (
    <>
      <div className="lowerBracket">
        <h1>Lower Bracket</h1>
        <div className="lowerGames">
          <div className="lowerfirst">
            <p>first round</p>
            <div className="firstLowerBracket">
              {lowerVersusPlayers.map((versus, i) => (
                <Game
                  key={i}
                  playerone={versus[0]}
                  playertwo={versus[1]}
                  id={`lowerFirst${i}`}
                />
              ))}
            </div>
          </div>
          {secondLowerPlayers.length > 0 ? (
            <div className="lowersecond">
              <p>second</p>
              <div className="secondLowerBracket">
                {secondLowerPlayers.map((versus, i) => (
                  <Game
                    key={i}
                    playerone={versus[0]}
                    playertwo={versus[1]}
                    id={`lowerSecond${i}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {thirdLowerPlayers.length > 0 ? (
            <div className="lowerthird">
              <p>Third </p>
              <div className="secondLowerBracket">
                {thirdLowerPlayers.map((versus, i) => (
                  <Game
                    key={i}
                    playerone={versus[0]}
                    playertwo={versus[1]}
                    id={`lowerThird${i}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="lowerfinal">
            <p>Lower final</p>
            <div className="secondLowerBracket">
              <Game
                playerone={lowerFinalPlayers[0][0]}
                playertwo={lowerFinalPlayers[0][1]}
                id={`loserFinal`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerBracket;
