import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BoardList from './boardList';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    padding: '12px',
  },
});

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectPTT()),
});

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles)
class Favorite extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { favorites: [] };
  }
  async componentDidMount() {
    const { ptt } = this.props;
    const favorites = await ptt.getFavorite();
    this.setState({ favorites });
  }
  render() {
    const {
      classes
    } = this.props;
    const {
      favorites,
    } = this.state;
    return (
      <div className={ classes.root }>
        <Typography type="headline"> favorite </Typography>
        <BoardList boards={favorites.filter(({ divider }) => !divider)} />
      </div>
    );
  }
};

export default Favorite;
