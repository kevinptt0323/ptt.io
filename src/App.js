import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import { createStore } from './store';

const history = createHashHistory();
const store = createStore(history);

const Home = () => (
  <div>Hello, world</div>
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
