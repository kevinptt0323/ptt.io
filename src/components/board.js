import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import ArticleList from './articleList';

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
  loadMore = async () => {
    const {
      ptt,
      match: { params: { boardname } },
    } = this.props;
    const articles = [...this.state.articles];
    const oldArticles = await ptt.getArticles(boardname, articles[articles.length-1].sn-1);
    articles.push(...oldArticles);
    this.setState({ articles });
  };
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
        <Typography type='subheading'
          component={(props) => <Link to='/favorite' {...props} />
        }>
          返回
        </Typography>
        <ArticleList
          boardname={boardname}
          articles={articles}
          loadMore={this.loadMore}
          style={{ marginTop: 0 }}
        />
      </div>
    );
  }
};

export default Board;
