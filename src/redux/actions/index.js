export const PLAYER_INFO = 'PLAYER_INFO';
export const ADD_PLAYER = 'ADD_PLAYER';

export const playerAction = (state) => ({ type: PLAYER_INFO, state });

export const addPlayerAction = (state) => ({
  type: ADD_PLAYER,
  payload: {
    ...state,
  },
});
