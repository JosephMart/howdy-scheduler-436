import React from 'react'
import { withStyles } from '@material-ui/core'
import Bar from './bar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
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
    id: 0,
    location: "Room 1"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 0),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    location: "Room 1"
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 14, 30),
    endDate: new Date(2018, 5, 25, 15, 30),
    id: 2,
    location: "Room 2"
  }];

function Calendar ({ classes }) {
  return (
        <Scheduler className={classes.scheduler} data={appointments}>
          <ViewState currentDate="2018-05-20" />
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
        </Scheduler>
  )
}

export default withStyles(styles)(Calendar)