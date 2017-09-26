import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import connect from './connect';

export default combineReducers({
  connect,
  routing: routerReducer,
});
