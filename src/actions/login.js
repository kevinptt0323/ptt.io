export const LOGIN = 'LOGIN';
export const NO_LOGIN = 'NO_LOGIN';
export const LOGGING = 'LOGGING';
export const LOGGED = 'LOGGED';

const login = (username, password) => (dispatch, getState) => {
  dispatch({ type: LOGIN, status: LOGGING });
  console.log(username, password);
  const { ptt } = getState().connect;
  console.log(ptt);
  dispatch({ type: LOGIN, status: LOGGED });
};

export default login;
