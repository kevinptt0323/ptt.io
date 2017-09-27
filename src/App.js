import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey'

import {
  Home,
  Login,
} from './components';
import connectPTT from './actions/connect';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends PureComponent {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.connect();
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: '100%', height: '100vh', background: grey[900] }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </MuiThemeProvider>
    );
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
