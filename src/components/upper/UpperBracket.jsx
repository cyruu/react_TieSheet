import React, { useEffect } from "react";
import Game from "../Game";
import { useSelector } from "react-redux";
function UpperBracket() {
  const versusArray = useSelector((state) => state.versusPlayers);
  const secondUpperPlayers = useSelector((state) => state.secondUpperPlayers);
  const upperFinalPlayers = useSelector((state) => state.upperFinalPlayers);
  const noOfPlayers = useSelector((state) => state.noOfPlayers);
  const thirdUpperLoserPlayers = useSelector(
    (state) => state.thirdUpperLoserPlayers
  );
  const secondUpperLoserPlayers = useSelector(
    (state) => state.secondUpperLoserPlayers
  );

  const allPlayers = useSelector((state) => state.allPlayers);
  const thirdUpperPlayers = useSelector((state) => state.thirdUpperPlayers);
  const grandFinalPlayers = useSelector((state) => state.grandFinalPlayers);
  useEffect(() => {
    const firstRoundUpper = document.querySelector(".first p");

    if (noOfPlayers == 4) {
      firstRoundUpper.style.transform = "translateY(300%)";
    } else if (noOfPlayers == 8) {
      firstRoundUpper.style.transform = "translateY(0%)";
    } else {
      firstRoundUpper.style.transform = "";
    }
  }, [noOfPlayers]);
  return (
    <div className="upperBracket">
      <h1>Upper Bracket</h1>
      <div className="upperGames">
        <div className="first">
          <p>First Round</p>
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
            <p>Second Round</p>
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
            <p>Third Round</p>
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
            <p>Upper Finals</p>
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
        <div className="grandFinal">
          <p>Grand finals</p>
          <div className="upperFinalBracket">
            <Game
              playerone={grandFinalPlayers[0][0]}
              playertwo={grandFinalPlayers[0][1]}
              id={`grandFinal`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperBracket;
