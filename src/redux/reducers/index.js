import { combineReducers } from 'redux';
import playerReducer from './player';
import triviaReducer from './trivia';
import token from './token';

const rootReducer = combineReducers({
  player: playerReducer,
  trivia: triviaReducer,
  token,
});

export default rootReducer;
