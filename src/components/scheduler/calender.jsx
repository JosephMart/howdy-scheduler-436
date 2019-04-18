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
const appointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 30),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 0
  }
];

function Calendar ({ classes, data }) {
  console.log(appointments)
  return (
    <Scheduler className={classes.scheduler} data={data}>
      <ViewState currentDate="2018-06-28" />
      <WeekView startDayHour={9} endDayHour={19} />
      <Appointments />
    </Scheduler>
  )
}

export default withStyles(styles)(Calendar)
