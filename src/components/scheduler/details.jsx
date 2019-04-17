import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import SimpleTabs from '../simpletab'
import ProfessorInfo from "./professor-info";
import History from './history'
import CourseDetails from "./course-details";

const styles = theme => ({
  root: {
    height: "600px",
    minWidth: '100%'
  }
})

function Details ({ classes, section, course, professor }) {
  const courseName = course._id && course._id.split('_').slice(0, 2).join('-');
  const courseData = professor.distributionData && professor.distributionData[courseName];

  const tabs = [
    {label: 'Course Details', content: <CourseDetails professor={professor} course={course} section={section}/>},
    {label: 'Course History', content: <History data={courseData} />},
    {
      label: 'Professor Info',
      content: <ProfessorInfo
        prof={professor}
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
