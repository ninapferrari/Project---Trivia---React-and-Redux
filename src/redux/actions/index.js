export const PLAYER_INFO = 'PLAYER_INFO';
export const ADD_PLAYER = 'ADD_PLAYER';
export const GET_TOKEN = 'GET_TOKEN';

export const playerAction = (state) => ({ type: PLAYER_INFO, state });

export const addPlayerAction = (state) => ({
  type: ADD_PLAYER,
  payload: {
    ...state,
  },
});

export const playerAction = (state) => ({ type: PLAYER_INFO, state });

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getTokenThunk = () => async (dispatch) => {
  try {
    const request = await fetch('https://opentdb.com/api_token.php?command=request');
    const response = await request.json();
    const token = await response.token;
    dispatch(getToken(token));
    localStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};
