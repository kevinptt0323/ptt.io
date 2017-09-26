import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

const initialState = {};

const create = history => {
  const middlewares = [routerMiddleware(history), reduxThunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-logger').logger);
  }
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default create;

