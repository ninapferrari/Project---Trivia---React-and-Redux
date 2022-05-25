import { combineReducers } from 'redux';
import playerReducer from './player';
import triviaReducer from './trivia';

const rootReducer = combineReducers({ player: playerReducer, trivia: triviaReducer });

export default rootReducer;
