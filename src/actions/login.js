export const LOGIN = 'LOGIN';
export const NO_LOGIN = 'NO_LOGIN';
export const LOGGING = 'LOGGING';
export const LOGGED = 'LOGGED';
const USER = 'USER';

const login = (username, password) => async (dispatch, getState) => {
  dispatch({ type: LOGIN, status: LOGGING });
  const { ptt } = getState().connect;
  if (await ptt.login(username, password)) {
    dispatch({ type: LOGIN, status: LOGGED });
    dispatch({ type: USER, payload: { username } });
  } else {
    dispatch({ type: LOGIN, status: NO_LOGIN });
  }
};

export default login;
