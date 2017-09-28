import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  TileLink: {
    textDecoration: 'none',
  },
  TileComponent: {
    boxSizing: 'border-box',
    padding: '16px',
    minHeight: 'calc(100vw / 8)',
    wordWrap: 'break-word',
  },
});

const TileComponent = withStyles(styles)(({
  classes,
  to,
  ...props
}) => (
  <Grid item xs={12} md={6}>
    <Link to={to} className={ classes.TileLink }>
      <Paper {...props} className={ classes.TileComponent } />
    </Link>
  </Grid>
));


class ArticleList extends PureComponent {
  render() {
    const {
      boardname,
      articles,
    } = this.props;
    return (
      <Grid container spacing={24}>
        {
          articles.map(({
            sn,
            push,
            date,
            author,
            status,
            title,
          }) => (
            <TileComponent key={`${boardname}-${sn}-${title}`} to={`/board/${boardname}/${sn}`}>
              <Typography type="title">{ title }</Typography>
              <Typography type="body1">{ author } - { date }</Typography>
              <Typography type="caption">{ push }</Typography>
            </TileComponent>
          ))
        }
      </Grid>
    );
  }
};

export default ArticleList;
