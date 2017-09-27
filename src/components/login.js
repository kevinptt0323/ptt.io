import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import login, {
  LOGGED,
} from '../actions/login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'

const styles = theme => ({
  FormField: {
    margin: 8,
  },
});

const FormField = withStyles(styles)(({classes, ...props}) => (
  <div className={classes.FormField} {...props} />
));

const mapStateToProps = state => ({
  loggedin: state.login === LOGGED,
});

const mapDispatchToProps = dispatch => ({
  login: (...args) => dispatch(login(...args)),
  dispatch,
});

@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles)
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
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper style={{ padding: 16, width: 400, textAlign: 'center' }}>
          <Typography type="title"> Login </Typography>
          <FormField>
            <TextField label="username" />
          </FormField>
          <FormField>
            <TextField label="password" type="password" />
          </FormField>
          <FormField>
            <Button raised color="primary" onClick={this.login}>Login</Button>
          </FormField>
        </Paper>
      </div>
    );
  }
};
export default Login;
