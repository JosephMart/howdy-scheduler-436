import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import SimpleTabs from '../simpletab'
import ProfessorInfo from "./professor-info";
import { default as moore } from "../../assets/images/moore.png";
import History from './history'

const styles = theme => ({
  root: {
    height: "100%",
    minWidth: '100%'
  }
})

function Details ({ classes, section, course, professor }) {
  const courseName = course._id && course._id.split('_').slice(0, 2).join('-');
  const courseData = professor.distributionData && professor.distributionData[courseName];

  const tabs = [
    {label: 'Course Details', content: 'Course Details'},
    {label: 'Course History', content: <History data={courseData} />},
    {
      label: 'Professor Info',
      content: <ProfessorInfo
        prof={{
          name: professor.name,
          title: "Professor",
          email: "tp@your-mom.com",
          phoneNumber: "MOM-DAD-YOUR",
          office: "YOMO 1",
          website: "joseph.martinsen.com",
          image: moore
        }}
      />
    }
  ];

  return (
    <Paper className={classes.root} elevation={1} square>
      <SimpleTabs tabs={tabs} scrollable />
    </Paper>
  )
}

export default withStyles(styles)(Details)
