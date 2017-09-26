import {
  LOGIN,
  NO_LOGIN,
} from '../actions/login';
const initialState = NO_LOGIN;

const login = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return action.status;
    default:
      return state;
  }
};

export default login;
