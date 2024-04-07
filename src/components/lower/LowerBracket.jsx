import React, { useEffect } from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
//lower bracker
function LowerBracket() {
  const lowerVersusPlayers = useSelector((state) => state.lowerVersusPlayers);
  // console.log(lowerVersusPlayers);
  const secondLowerPlayers = useSelector((state) => state.secondLowerPlayers);
  const thirdLowerPlayers = useSelector((state) => state.thirdLowerPlayers);
  const noOfPlayers = useSelector((state) => state.noOfPlayers);
  // const forthLowerPlayers = useSelector((state) => state.forthLowerPlayers);
  const lowerFinalPlayers = useSelector((state) => state.lowerFinalPlayers);
  const grandFinalPlayers = useSelector((state) => state.grandFinalPlayers);

  useEffect(() => {
    const firstRoundLower = document.querySelector(".lowerfirst p");

    if (noOfPlayers == 4) {
      firstRoundLower.style.transform = "translateY(900%)";
    } else if (noOfPlayers == 8) {
      firstRoundLower.style.transform = "translateY(300%)";
    } else {
      firstRoundLower.style.transform = "";
    }
  }, [noOfPlayers]);
  return (
    <>
      <div className="lowerBracket">
        <h1>Lower Bracket</h1>
        <div className="lowerGames">
          <div className="lowerfirst">
            <p>First Round</p>
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
              <p>Second Round</p>
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
              <p>Third Round</p>
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
            <p>Lower Final</p>
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
