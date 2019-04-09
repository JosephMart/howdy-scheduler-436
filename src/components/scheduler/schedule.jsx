import React from 'react'
import { withStyles } from '@material-ui/core'
import Bar from './bar'
import Paper from '@material-ui/core/Paper'
import SimpleTabs from '../simpletab'

const styles = theme => ({
  root: {
    height: "100%",
    minWidth: '100%'
  }
})

function Schedule ({ classes }) {
  const schedules = [
    {label: 'Schedule 1', content: 'Schedule 1'},
    {label: 'Schedule 2', content: 'Schedule 2'}
  ]
  return (
    <Paper className={classes.root} elevation={1} square>
      <Bar>
        Schedule
      </Bar>
      <SimpleTabs tabs={schedules} scrollable flipped />
    </Paper>
  )
}

export default withStyles(styles)(Schedule)
