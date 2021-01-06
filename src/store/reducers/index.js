import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {core} from './core';
import {note} from './note';
import {auth} from './auth';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  core: core,
  note: note,
  auth: auth,
});
export default rootReducer;