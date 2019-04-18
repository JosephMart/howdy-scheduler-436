import React from 'react'
import { withStyles } from '@material-ui/core'
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

const styles = theme => ({
  scheduler: {
    padding: 0
  }
});

function Calendar ({ classes, data }) {
  console.log(data);
  return (
    <Scheduler className={classes.scheduler} data={data}>
      <ViewState currentDate="2018-06-28" />
      <WeekView startDayHour={9} endDayHour={19} />
      <Appointments />
    </Scheduler>
  )
}

export default withStyles(styles)(Calendar)
