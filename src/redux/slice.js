import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    noOfPlayers: 0,
    allPlayers: [],
    versusPlayers: [],
    secondUpperPlayers: [],
    secondUpperLoserPlayers: [["", ""]],
    thirdUpperPlayers: [],
    thirdUpperLoserPlayers: [["", ""]],
    upperFinalPlayers: [],
    lowerVersusPlayers: [],
    secondLowerPlayers: [],
    thirdLowerPlayers: [],
    grandFinalPlayers: [],
    lowerFinalPlayers: [["", ""]],
  },
  reducers: {
    increasePlayer: (state, action) => {
      if (state.noOfPlayers < 8) {
        return {
          ...state,

          noOfPlayers: state.noOfPlayers + 4,
        };
      }
    },
    decreasePlayer: (state, action) => {
      if (state.noOfPlayers != 0) {
        return {
          ...state,

          noOfPlayers: state.noOfPlayers - 4,
        };
      }
    },
    getAllPlayers: (state, action) => {
      return {
        ...state,
        allPlayers: action.payload.allPlayers,
      };
    },
    versusAllPlayers: (state, action) => {
      return {
        ...state,
        versusPlayers: action.payload.versusPlayers,
      };
    },
    setInitialUpperSecondRound: (state, action) => {
      const totalGames = Math.floor(state.noOfPlayers / 4);
      const players = [];
      for (let i = 0; i < totalGames; i++) {
        players.push(["", ""]);
      }

      return {
        ...state,
        secondUpperPlayers: players,
      };
    },
    setInitialUpperThirdRound: (state, action) => {
      const totalGames = Math.floor(state.noOfPlayers / 8);
      const players = [];
      for (let i = 0; i < totalGames; i++) {
        players.push(["", ""]);
      }

      return {
        ...state,
        thirdUpperPlayers: players,
      };
    },
    setInitialUpperFinal: (state, action) => {
      const players = [["", ""]];

      return {
        ...state,
        upperFinalPlayers: players,
      };
    },
    setInitialLowerVersus: (state, action) => {
      const totalGames = Math.floor(state.noOfPlayers / 4);
      const players = [];

      for (let i = 0; i < totalGames; i++) {
        players.push(["", ""]);
      }

      return {
        ...state,
        lowerVersusPlayers: players,
      };
    },
    setInitialLowerSecondRound: (state, action) => {
      if (state.noOfPlayers == 8) {
        const players = [["", ""]];

        return {
          ...state,
          secondLowerPlayers: players,
        };
      }
    },
    setInitialLowerThirdRound: (state, action) => {
      if (state.noOfPlayers == 8) {
        const players = [["", ""]];

        return {
          ...state,
          thirdLowerPlayers: players,
        };
      }
    },
    // setInitialLowerForthRound: (state, action) => {
    //   if (state.noOfPlayers == 8) {
    //     const players = [["", ""]];

    //     return {
    //       ...state,
    //       forthLowerPlayers: players,
    //     };
    //   }
    // },

    winnerOfUpperFirst0: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);

      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            [state.allPlayers[winner], state.secondUpperPlayers[0][1]],
            state.secondUpperPlayers[1],
          ],
          lowerVersusPlayers: [
            [state.allPlayers[loser], state.lowerVersusPlayers[0][1]],
            state.lowerVersusPlayers[1],
          ],
        };
      } else if (state.noOfPlayers == 4) {
        return {
          ...state,
          upperFinalPlayers: [
            [state.allPlayers[winner], state.secondUpperPlayers[0][1]],
          ],
          lowerVersusPlayers: [
            [state.allPlayers[loser], state.lowerVersusPlayers[0][1]],
          ],
        };
      }
    },
    winnerOfUpperFirst1: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            [state.secondUpperPlayers[0][0], state.allPlayers[winner + 2]],
            state.secondUpperPlayers[1],
          ],
          lowerVersusPlayers: [
            [state.lowerVersusPlayers[0][0], state.allPlayers[loser + 2]],
            state.lowerVersusPlayers[1],
          ],
        };
      } else if (state.noOfPlayers == 4) {
        return {
          ...state,
          upperFinalPlayers: [
            [state.upperFinalPlayers[0][0], state.allPlayers[winner + 2]],
          ],
          lowerVersusPlayers: [
            [state.lowerVersusPlayers[0][0], state.allPlayers[loser + 2]],
          ],
        };
      }
    },
    winnerOfUpperFirst2: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            state.secondUpperPlayers[0],
            [state.allPlayers[winner + 4], state.secondUpperPlayers[1][1]],
          ],
          lowerVersusPlayers: [
            state.lowerVersusPlayers[0],
            [state.allPlayers[loser + 4], state.lowerVersusPlayers[1][1]],
          ],
        };
      }
    },
    winnerOfUpperFirst3: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            state.secondUpperPlayers[0],
            [state.secondUpperPlayers[1][0], state.allPlayers[winner + 6]],
          ],
          lowerVersusPlayers: [
            state.lowerVersusPlayers[0],
            [state.lowerVersusPlayers[1][0], state.allPlayers[loser + 6]],
          ],
        };
      }
    },
    winnerOfUpperSecond0: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          thirdUpperPlayers: [
            [
              state.secondUpperPlayers[0][winner],
              state.thirdUpperPlayers[0][1],
            ],
          ],
          secondUpperLoserPlayers: [
            [
              state.secondUpperPlayers[0][loser],
              state.secondUpperLoserPlayers[0][1],
            ],
          ],
        };
      }
    },
    winnerOfUpperSecond1: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          thirdUpperPlayers: [
            [
              state.thirdUpperPlayers[0][0],
              state.secondUpperPlayers[1][winner],
            ],
          ],
          secondUpperLoserPlayers: [
            [
              state.secondUpperLoserPlayers[0][0],
              state.secondUpperPlayers[1][loser],
            ],
          ],
        };
      }
    },
    winnerOfUpperSecondLoser: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      return {
        ...state,
        thirdUpperLoserPlayers: [
          [
            state.thirdUpperLoserPlayers[0][0],
            state.secondUpperLoserPlayers[0][winner],
          ],
        ],
      };
    },
    winnerOfUpperThird: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      return {
        ...state,
        upperFinalPlayers: [
          [state.thirdUpperPlayers[0][winner], state.upperFinalPlayers[0][1]],
        ],
        thirdUpperLoserPlayers: [
          [
            state.thirdUpperPlayers[0][loser],
            state.thirdUpperLoserPlayers[0][1],
          ],
        ],
      };
    },
    winnerOfUpperThirdLoser: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      return {
        ...state,
        upperFinalPlayers: [
          [
            state.upperFinalPlayers[0][0],
            state.thirdUpperLoserPlayers[0][winner],
          ],
        ],
        thirdLowerPlayers: [
          [
            state.thirdUpperLoserPlayers[0][loser],
            state.thirdLowerPlayers[0][1],
          ],
        ],
      };
    },
    winnerOfUpperFinal: (state, action) => {
      const winner = Number(action.payload.winner);
      const loser = Number(action.payload.loser);
      return {
        ...state,
        lowerFinalPlayers: [
          [state.upperFinalPlayers[0][loser], state.lowerFinalPlayers[0][1]],
        ],
      };
    },

    winnerOfLowerFirst0: (state, action) => {
      const winner = Number(action.payload.winner);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondLowerPlayers: [
            [
              state.lowerVersusPlayers[0][winner],
              state.secondLowerPlayers[0][1],
            ],
          ],
        };
      } else if (state.noOfPlayers == 4) {
        return {
          ...state,
          lowerFinalPlayers: [
            state.lowerFinalPlayers[0][0],
            state.lowerVersusPlayers[0][winner],
          ],
        };
      }
    },
    winnerOfLowerFirst1: (state, action) => {
      const winner = Number(action.payload.winner);
      return {
        ...state,
        secondLowerPlayers: [
          [state.secondLowerPlayers[0][0], state.lowerVersusPlayers[1][winner]],
        ],
      };
    },
    winnerOfLowerSecond: (state, action) => {
      const winner = Number(action.payload.winner);
      return {
        ...state,
        thirdLowerPlayers: [
          [state.thirdLowerPlayers[0][0], state.secondLowerPlayers[0][winner]],
        ],
      };
    },
    winnerOfLowerThird: (state, action) => {
      const winner = Number(action.payload.winner);
      return {
        ...state,
        lowerFinalPlayers: [
          [state.lowerFinalPlayers[0][0], state.thirdLowerPlayers[0][winner]],
        ],
      };
    },
  },
});
export const {
  increasePlayer,
  decreasePlayer,
  getAllPlayers,
  versusAllPlayers,
  setInitialUpperSecondRound,
  setInitialUpperThirdRound,
  winnerOfUpperFirst0,
  winnerOfUpperFirst1,
  winnerOfUpperFirst2,
  winnerOfUpperFirst3,
  winnerOfUpperSecond0,
  winnerOfUpperSecond1,
  setInitialUpperFinal,
  setInitialLowerVersus,
  setInitialLowerSecondRound,
  setInitialLowerThirdRound,
  // setInitialLowerForthRound,
  setInitialLowerFinal,
  winnerOfUpperSecondLoser,
  winnerOfUpperThird,
  winnerOfUpperThirdLoser,
  winnerOfLowerFirst0,
  winnerOfLowerFirst1,
  winnerOfLowerSecond,
  winnerOfLowerThird,
  winnerOfUpperFinal,
} = slice.actions;
export default slice.reducer;
