import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Typography from 'material-ui/Typography'

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
});

const mapDispatchToProps = dispatch => ({
});

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Board extends Component {
  constructor(props) {
    super(props);
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
