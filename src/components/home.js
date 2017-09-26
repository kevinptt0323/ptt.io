import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { LOGGED } from '../actions/login';

class Home extends PureComponent {
  constructor(props) {
    super();
    if (!props.loggedin) {
      props.dispatch(push('/login'));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedin) {
      this.props.dispatch(push('/login'));
    }
  }
  render() {
    return <div>Home</div>
  }
};

const mapStateToProps = state => ({
  loggedin: state.login === LOGGED,
});

export default connect(mapStateToProps)(Home);
