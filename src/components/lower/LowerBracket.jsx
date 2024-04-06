import React from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
function LowerBracket() {
  const lowerVersusPlayers = useSelector((state) => state.lowerVersusPlayers);
  const secondLowerPlayers = useSelector((state) => state.secondLowerPlayers);
  const thirdLowerPlayers = useSelector((state) => state.thirdLowerPlayers);
  const forthLowerPlayers = useSelector((state) => state.forthLowerPlayers);
  return (
    <>
      <div className="lowerBracket">
        <h1>Lower Bracket</h1>
        <div className="lowerGames">
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
          {secondLowerPlayers.length > 0 ? (
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
          ) : (
            ""
          )}
          {thirdLowerPlayers.length > 0 ? (
            <div className="secondLowerBracket">
              {thirdLowerPlayers.map((versus, i) => (
                <Game
                  key={i}
                  playerone={versus[0]}
                  playertwo={versus[1]}
                  id={`lowerSecond${i}`}
                />
              ))}
            </div>
          ) : (
            ""
          )}
          {forthLowerPlayers.length > 0 ? (
            <div className="secondLowerBracket">
              {forthLowerPlayers.map((versus, i) => (
                <Game
                  key={i}
                  playerone={versus[0]}
                  playertwo={versus[1]}
                  id={`lowerSecond${i}`}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default LowerBracket;
