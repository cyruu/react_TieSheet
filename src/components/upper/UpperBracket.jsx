import React from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
function UpperBracket() {
  const versusArray = useSelector((state) => state.versusPlayers);
  const secondUpperPlayers = useSelector((state) => state.secondUpperPlayers);

  const allPlayers = useSelector((state) => state.allPlayers);
  const thirdUpperPlayers = useSelector((state) => state.thirdUpperPlayers);
  console.log("third", thirdUpperPlayers);
  return (
    <div className="upperBracket">
      <h1>Upper Bracket</h1>
      <div className="upperGames">
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
        {secondUpperPlayers.length > 0 ? (
          <div className="second">
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
            <Game />
          </div>
        ) : (
          ""
        )}
        {/* third round */}
        {thirdUpperPlayers.length > 0 ? (
          <div className="third">
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
            <Game />
          </div>asd
        ) : (
          ""
        )}
        {/* third round */}
        {thirdUpperPlayers.length > 0 ? (
          <div className="third">
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
            <Game />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UpperBracket;
