export const PLAYER_INFO = 'PLAYER_INFO';
export const ADD_PLAYER = 'ADD_PLAYER';
export const GET_TOKEN = 'GET_TOKEN';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';

export const playerAction = (state) => ({ type: PLAYER_INFO, state });

export const addPlayerAction = (state) => ({
  type: ADD_PLAYER,
  payload: {
    ...state,
  },
});

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const addQuestionsAction = (state) => ({
  type: ADD_QUESTIONS,
  payload: {
    ...state,
  },
});

export const getTokenThunk = () => async (dispatch) => {
  try {
    const request = await fetch('https://opentdb.com/api_token.php?command=request');
    const response = await request.json();
    const token = await response.token;
    dispatch(getToken(token));
    const data = JSON.stringify({ ranking: [], token } || {});
    localStorage.setItem('data', data);
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionsThunk = (token) => async (dispatch) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    dispatch(addQuestionsAction(data));
  } catch (error) {
    console.log(error);
  }
};
