import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    minWidth: '100%',
  },
  toolbar: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  }
});

function Bar({ classes, children }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" elevation={0} square>
        <Toolbar className={classes.toolbar} >
          <Typography variant='h5'>
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
