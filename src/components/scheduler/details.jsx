import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import SimpleTabs from '../simpletab'
import ProfessorInfo from "./professor-info";
import { default as moore } from "../../assets/images/moore.png";

const styles = theme => ({
  root: {
    height: "100%",
    minWidth: '100%'
  }
})

function Details ({ classes }) {
  const tabs = [
    {label: 'Course Details', content: 'Course Details'},
    {label: 'Course History', content: 'Course History'},
    {
      label: 'Professor Info',
      content: <ProfessorInfo
        prof={{
          name: "Tristan Partin",
          title: "Your Mom",
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
      <SimpleTabs tabs={tabs} />
    </Paper>
  )
}

export default withStyles(styles)(Details)
