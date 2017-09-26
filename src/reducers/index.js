import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import connect from './connect';
import login from './login';

export default combineReducers({
  connect,
  login,
  routing: routerReducer,
});
