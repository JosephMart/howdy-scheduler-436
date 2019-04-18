import React from 'react'
import { withStyles } from '@material-ui/core'
import Bar from './bar'
import Paper from '@material-ui/core/Paper'
import { TabContainer } from '../simpletab'
import Calender from './calender';
import AddIcon from "@material-ui/icons/Add";
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = theme => ({
  root: {
    height: "100%",
    minWidth: '100%'
  }
})

function Schedule ({ classes, currentScheduleIndex, schedules, addSchedule, updateScheduleIndex }) {
  const tabs = schedules.map((s, i) => ({
    label: `Schedule ${i+1}`,
    content: <Calender data={schedules[i]} />
  }));
  tabs.push({
    icon: <AddIcon />,
    content: '',
    id: 'add-icon',
    ignored: true,
    onClick: addSchedule
  });
  return (
    <Paper className={classes.root} elevation={1} square>
      <Bar>
        Schedule
      </Bar>
      <div className={classes.root}>
        <AppBar position="static" color="secondary" elevation={0} square>
          <Tabs
            value={currentScheduleIndex}
            onChange={(e, val) => updateScheduleIndex(val)}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
          >
            {tabs.map(({ id, label, icon, onClick }) => (
              <Tab key={id || label} label={label} icon={icon} onClick={onClick} />
            ))}
          </Tabs>
        </AppBar>
        <TabContainer>{tabs[currentScheduleIndex].content}</TabContainer>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Schedule)
