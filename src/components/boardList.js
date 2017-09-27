import React, { PureComponent } from 'react';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  TileComponent: {
    boxSizing: 'border-box',
    padding: '16px',
    minHeight: 'calc(100vw / 8)',
    wordWrap: 'break-word',
  },
});

const TileComponent = withStyles(styles)(({
  classes,
  ...props
}) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper {...props} className={ classes.TileComponent }/>
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
            admin,
            boardname,
            category,
            read,
            title,
            users,
            divider,
            folder,
          }) => (
            <TileComponent key={boardname}>
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
