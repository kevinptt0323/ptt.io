import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { LOGGED } from '../actions/login';

import Typography from 'material-ui/Typography'

const mapStateToProps = state => ({
  loggedIn: state.login === LOGGED,
  user: state.user,
});

@connect(mapStateToProps)
class Home extends PureComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Typography type="title"> Hello, { this.props.user.username }! </Typography>
    );
  }
};

export default Home;
