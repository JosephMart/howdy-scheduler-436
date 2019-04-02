import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import SimpleTabs from '../simpletab'

const styles = theme => ({
  root: {
    height: 300,
    minWidth: '100%'
  }
})

function Details ({ classes }) {
  const tabs = [
    {label: 'Course Details', content: 'Course Details'},
    {label: 'Course History', content: 'Course History'},
    {label: 'Professor Info', content: 'Professor Info'}
  ];

  return (
    <Paper className={classes.root} elevation={1} square>
      <SimpleTabs tabs={tabs} />
    </Paper>
  )
}

export default withStyles(styles)(Details)
