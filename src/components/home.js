import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { LOGGED } from '../actions/login';

import Typography from 'material-ui/Typography'

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
    return (
      <Typography type="title"> Hello, { this.props.user.username }! </Typography>
    );
  }
};

const mapStateToProps = state => ({
  loggedin: state.login === LOGGED,
  user: state.user,
});

export default connect(mapStateToProps)(Home);
