import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ArticleList from './articleList';

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
});

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles)
class Board extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    const {
      ptt,
      match: { params: { boardname } },
    } = this.props;
    const articles = await ptt.getArticles(boardname);
    this.setState({ articles });
  }
  render() {
    const {
      match: { params: { boardname } },
      classes,
    } = this.props;
    const {
      articles,
    } = this.state;
    return (
      <div className={ classes.root }>
        <Typography type='headline'> { boardname } </Typography>
        <ArticleList boardname={boardname} articles={articles} />
      </div>
    );
  }
};

export default Board;
