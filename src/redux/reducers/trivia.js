import { ADD_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  response_code: 1,
  results: [],
};

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_QUESTIONS:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default triviaReducer;
