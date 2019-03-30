import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import Scheduler from '../components/scheduler'
import Header from '../components/header'
import Footer from '../components/footer'

const styles = theme => ({
  root: {

  },
  main: {
    maxWidth: 2000,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.sideGutter,
    paddingRight: theme.spacing.sideGutter,
    margin: 'auto',
  }
});

function Index ({ classes }) {
  return (
    <div className={classes.root}>
      <Header/>
      <main className={classes.main}>
        <Typography variant="h4" gutterBottom>
          Scheduling A Major
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          start of something great
        </Typography>
        <Scheduler/>
      </main>
      <Footer/>
    </div>
  )
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
