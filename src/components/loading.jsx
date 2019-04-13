import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function Loading({ classes, extraClasses }) {
  return (
    <div className={[extraClasses, classes.root].join(' ')}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
