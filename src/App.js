import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import connectPTT from './actions/connect';

class App extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.connect();
  }
  render() {
    return <div> { this.props.connected ? "connected" : "disconnected" } </div>;
  }
};

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
  connected: !!state.connect.ptt,
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectPTT()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
