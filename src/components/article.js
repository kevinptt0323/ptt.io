import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Linkify from 'react-linkify';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    padding: '12px',
  },
  paper: {
    padding: '16px',
    overflow: 'auto',
  },
  link: {
    color: 'inherit',
  },
});

const mapStateToProps = state => ({
  ptt: state.connect.ptt,
});

const mapDispatchToProps = dispatch => ({
});

const MyLink = withStyles(styles)(({ classes, className = '', ...props }) => (
  <a
    className={`${className} ${classes.link}`}
    target='_blank'
    {...props}
  />
));

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles)
class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      article: { lines: [] },
    };
  }
  async componentDidMount() {
    const {
      ptt,
      match: { params: { boardname, sn } },
    } = this.props;
    const article = await ptt.getArticle(boardname, sn);
    article.lines = article.lines.map(line => line.replace(/ /g, '\u00a0'));
    this.setState({ article });
  }
  render() {
    const {
      classes,
    } = this.props;
    const {
      article,
    } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Linkify component={MyLink}>
            { article.lines.map(line => (
              <Typography variant="body2">
                {line}
              </Typography>
            ))}
          </Linkify>
        </Paper>
      </div>
    );
  }
};

export default Article;
