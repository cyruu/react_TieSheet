import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    noOfPlayers: 0,
    allPlayers: [],
    versusPlayers: [],
    secondUpperPlayers: [],
    thirdUpperPlayers: [],
    upperFinalPlayers: [],
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
      const totalGames = Math.floor(state.noOfPlayers / 8);
      const players = [];
      for (let i = 0; i < totalGames; i++) {
        players.push(["", ""]);
      }

      return {
        ...state,
        upperFinalPlayers: players,
      };
    },
    winnerOfUpperFirst0: (state, action) => {
      const winner = Number(action.payload.winner);
      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            [state.allPlayers[winner], state.secondUpperPlayers[0][1]],
            state.secondUpperPlayers[1],
          ],
        };
      } else if (state.noOfPlayers == 4) {
        return {
          ...state,
          secondUpperPlayers: [
            [state.allPlayers[winner], state.secondUpperPlayers[0][1]],
          ],
        };
      }
    },
    winnerOfUpperFirst1: (state, action) => {
      const winner = Number(action.payload.winner);

      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            [state.secondUpperPlayers[0][0], state.allPlayers[winner + 2]],
            state.secondUpperPlayers[1],
          ],
        };
      } else if (state.noOfPlayers == 4) {
        return {
          ...state,
          secondUpperPlayers: [
            [state.secondUpperPlayers[0][0], state.allPlayers[winner + 2]],
          ],
        };
      }
    },
    winnerOfUpperFirst2: (state, action) => {
      const winner = Number(action.payload.winner);

      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            state.secondUpperPlayers[0],
            [state.allPlayers[winner + 4], state.secondUpperPlayers[1][1]],
          ],
        };
      }
    },
    winnerOfUpperFirst3: (state, action) => {
      const winner = Number(action.payload.winner);

      if (state.noOfPlayers == 8) {
        return {
          ...state,
          secondUpperPlayers: [
            state.secondUpperPlayers[0],
            [state.secondUpperPlayers[1][0], state.allPlayers[winner + 6]],
          ],
        };
      }
    },
    winnerOfUpperSecond0: (state, action) => {
      const winner = Number(action.payload.winner);

      if (state.noOfPlayers == 8) {
        return {
          ...state,
          thirdUpperPlayers: [
            [
              state.secondUpperPlayers[0][winner],
              state.thirdUpperPlayers[0][1],
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
} = slice.actions;
export default slice.reducer;
