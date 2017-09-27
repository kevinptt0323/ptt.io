import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import connect from './connect';
import login from './login';
import user from './user';

export default combineReducers({
  connect,
  login,
  user,
  routing: routerReducer,
});
