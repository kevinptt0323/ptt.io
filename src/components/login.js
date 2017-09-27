import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import login, {
  LOGGING,
  LOGGED,
} from '../actions/login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'

const styles = theme => ({
  FormField: {
    margin: '8px',
  },
});

const FormField = withStyles(styles)(({classes, ...props}) => (
  <div className={classes.FormField} {...props} />
));

const mapStateToProps = state => ({
  location: state.routing.location,
  loggedIn: state.login === LOGGED,
  loginState: state.login,
});

const mapDispatchToProps = dispatch => ({
  login: (...args) => dispatch(login(...args)),
  dispatch,
});

@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles)
class Login extends PureComponent {
  constructor(props) {
    super(props);
    const {
      loggedIn,
      dispatch,
      location,
    } = this.props;
    if(loggedIn) {
      const nextPage = location.state ? location.state.from : '/';
      dispatch(push(nextPage));
    }
    this.state = {
      username: '',
      password: '',
    };
  }
  login = () => {
    const {
      username,
      password,
    } = this.state;
    this.props.login(username, password);
  };
  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  componentWillReceiveProps(nextProps) {
    const {
      dispatch,
      location,
    } = this.props;
    if (nextProps.loggedIn) {
      const nextPage = location.state ? location.state.from : '/';
      dispatch(push(nextPage));
    }
  }
  render() {
    const {
      changeUsername,
      changePassword,
      login,
    } = this;
    const {
      username,
      password,
    } = this.state;
    const {
      loginState,
    } = this.props;
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper style={{ padding: 16, width: 400, textAlign: 'center' }}>
          <Typography type="headline"> Login </Typography>
          <FormField>
            <TextField
              label="username"
              value={username}
              onChange={changeUsername}
            />
          </FormField>
          <FormField>
            <TextField
              label="password"
              type="password"
              value={password}
              onChange={changePassword}
            />
          </FormField>
          <FormField>
            <Button raised color="primary"
              onClick={login}
              disabled={loginState === LOGGING}
            >
              Login
            </Button>
          </FormField>
        </Paper>
      </div>
    );
  }
};
export default Login;
