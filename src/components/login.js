import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import login, {
  LOGGED,
} from '../actions/login';

class Login extends PureComponent {
  constructor(props) {
    super();
    if (props.loggedin) {
      props.dispatch(push('/'));
    }
  }
  login = () => {
    this.props.login('A', 'B');
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedin) {
      this.props.dispatch(push('/'));
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loggedin: state.login === LOGGED,
});

const mapDispatchToProps = dispatch => ({
  login: (...args) => dispatch(login(...args)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
