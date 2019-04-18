import React from 'react'
import { withStyles } from '@material-ui/core'
import Bar from './bar'
import Paper from '@material-ui/core/Paper'
import SimpleTabs from '../simpletab'
import Calender from './calender';

const styles = theme => ({
  root: {
    height: "100%",
    minWidth: '100%'
  }
})

function Schedule ({ classes, currentScheduleIndex, schedules }) {
  const scheduleTabs = schedules.map((s, i) => ({
    label: `Schedule ${i+1}`,
    content: <Calender data={schedules[i]} />
  }));
  return (
    <Paper className={classes.root} elevation={1} square>
      <Bar>
        Schedule
      </Bar>
      <SimpleTabs tabs={scheduleTabs} scrollable flipped />
    </Paper>
  )
}

export default withStyles(styles)(Schedule)
