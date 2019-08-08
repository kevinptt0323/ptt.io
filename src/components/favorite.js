import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BoardList from './boardList';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

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
    const {
      ptt,
      match: { params: { index } },
    } = this.props;
    const indexArr = index ? index.split('/').map(i => i|0) : [];
    const favorites = await ptt.getFavorite(indexArr);
    this.setState({ favorites });
  }
  async componentDidUpdate(prevProps) {
    const {
      ptt,
      match: { params: { index } },
    } = this.props;
    if (index !== prevProps.match.params.index) {
      const indexArr = index ? index.split('/').map(i => i|0) : [];
      const favorites = await ptt.getFavorite(indexArr);
      this.setState({ favorites });
    }
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
