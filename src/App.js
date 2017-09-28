import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey'

import {
  Board,
  Login,
  Favorite,
} from './components';
import connectPTT from './actions/connect';
import { LOGGED } from './actions/login';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
  connected: !!state.connect.ptt,
  loggedIn: state.login === LOGGED,
  location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectPTT()),
});

const AuthedRoute = connect(state => ({
  loggedIn: state.login === LOGGED,
  location: state.routing.location,
}))(({component: Component, loggedIn, ...routeProps}) => (
  <Route
    {...routeProps}
    render={
      (props) => loggedIn ? <Component {...props} /> :
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
    }
  />
));

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class App extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.connect();
  }
  render() {
    const {
      loggedIn,
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: '100%', height: '100vh', background: grey[900], overflow: 'auto' }}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <AuthedRoute exact path='/board/:boardname' component={Board} />
            <AuthedRoute exact path='/favorite' component={Favorite} />
            <Redirect from='/' to='/favorite' />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
