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
    upperFinalPlayers: [],
    lowerVersusPlayers: [],
    secondLowerPlayers: [],
    thirdLowerPlayers: [],
    forthLowerPlayers: [],
    lowerFinalPlayers: [],
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
    setInitialLowerForthRound: (state, action) => {
      if (state.noOfPlayers == 8) {
        const players = [["", ""]];

        return {
          ...state,
          forthLowerPlayers: players,
        };
      }
    },
    setInitialLowerFinal: (state, action) => {
      const players = [["", ""]];

      return {
        ...state,
        lowerFinalPlayers: players,
      };
    },
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

      if (state.noOfPlayers == 8) {
        return {
          ...state,
          thirdUpperPlayers: [
            [
              state.thirdUpperPlayers[0][0],
              state.secondUpperPlayers[1][winner],
            ],
          ],
        };
      }
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
  setInitialLowerForthRound,
  setInitialLowerFinal,
} = slice.actions;
export default slice.reducer;
