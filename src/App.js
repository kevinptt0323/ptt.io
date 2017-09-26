import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  Home,
  Login,
} from './components';
import connectPTT from './actions/connect';

class App extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.connect();
  }
  render() {
    return <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
    </div>
  }
};

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
  connected: !!state.connect.ptt,
  location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectPTT()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
