import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

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
  <Grid item xs={12} sm={6} md={3}>
    <Link to={to} className={ classes.TileLink }>
      <Paper {...props} className={ classes.TileComponent } />
    </Link>
  </Grid>
));


class BoardList extends PureComponent {
  render() {
    const {
      boards
    } = this.props;
    return (
      <Grid container spacing={24}>
        {
          boards.map(({
            bn,
            admin,
            boardname,
            category,
            read,
            title,
            users,
            divider,
            folder,
          }) => (
            <TileComponent key={`${bn}-${boardname}`} to={`/board/${boardname}`}>
              <Typography type="title">{ !folder ? boardname : title }</Typography>
              <Typography type="body1">{ !folder ? title : null }</Typography>
            </TileComponent>
          ))
        }
      </Grid>
    );
  }
};

export default BoardList;
