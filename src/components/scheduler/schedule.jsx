import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import Bar from './bar'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    height: 600,
    minWidth: '100%'
  }
})

function Schedule ({ classes }) {
  return (
    <Paper className={classes.root} elevation={1} square>
      <Bar>
        <Typography>
          Schedule
        </Typography>
      </Bar>
    </Paper>
  )
}

export default withStyles(styles)(Schedule)
