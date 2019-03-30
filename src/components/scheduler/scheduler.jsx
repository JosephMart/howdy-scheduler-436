import React from 'react'
import PropTypes from 'prop-types'

import withRoot from '../../withRoot'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LabelScrollCol from './labelscrollcol'

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    // paddingLeft: 0,
    // paddingRight: 0,
    // color: 'white'
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
  },
  grid: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '25vw',
  },
  scrollCol: {
    height: 140,
    width: '20vw',
  },
  details: {
    height: 140,
    width: '60vw',
  },
  schedule: {
    height: 140 * 2,
    width: '25vw',
  },
})

function Scheduler ({ classes }) {
  return (
    <div>
      <Paper className={classes.root} elevation={24} style={{paddingLeft: 0, paddingRight: 0}}>
        <Grid container spacing={0}>
          {/*  All scroll cols and details */}
          <Grid container item xl={6} spacing={0}>
            {/* Scroll cols*/}
            <Grid container item xl={12} spacing={0}>
              {/*  Department */}
              <Grid item xl={4}>
                <LabelScrollCol />
              </Grid>
              {/*  Course */}
              <Grid item xl={4}>
                <LabelScrollCol />
              </Grid>
              {/*  Section*/}
              <Grid item xl={4}>
                <LabelScrollCol />
              </Grid>
            </Grid>
            {/* Details */}
            <Grid item xl={12}>
              <Paper className={classes.details} />
            </Grid>
          </Grid>
          {/*  Schedule */}
          <Grid container item xl={4}>
            <Grid item xl={12}>
              <Paper className={classes.schedule} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

Scheduler.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Scheduler))