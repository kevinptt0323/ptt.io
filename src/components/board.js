import React, { Component } from 'react';
import { connect } from 'react-redux';
import shallowEqual from 'fbjs/lib/shallowEqual';

import Typography from 'material-ui/Typography'

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
  location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
});

@connect(mapStateToProps, mapDispatchToProps)
class Board extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { match: { params: { boardname: oldBoard } } } = this.props;
    const { match: { params: { boardname: newBoard } } } = nextProps;
    const oldProps = { ...this.props, boardname: oldBoard };
    const newProps = { ...nextProps, boardname: newBoard };
    return !shallowEqual(oldProps, newProps) || !shallowEqual(this.state, nextState);
  }
  render() {
    const {
      match: { params: { boardname } },
      location,
    } = this.props;
    return (
      <div>
        <Typography type='headline'> { boardname } </Typography>
        <Typography type='title'> { location.pathname } </Typography>
      </div>
    );
  }
};

export default Board;
