import React from 'react'
import PropTypes from 'prop-types'

import withRoot from '../../withRoot'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LabelScrollCol from './labelscrollcol'
import Details from './details'
import Schedule from './schedule'
import PinnedSubheaderList from '../scrolllist'

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    // paddingLeft: 0,
    // paddingRight: 0,
    // color: 'white'
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
  },
  grid: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: '100%'
  },
  scrollCol: {
    height: 140,
    width: '100%'
  },
  details: {
    height: 140,
    width: '100%'
  },
  schedule: {
    height: 140 * 2,
    width: '100%'
  }
})

function Scheduler ({ classes, departments, onDepartmentSelect, selectedDepartment, courses, onCourseSelect, selectedCourse, sections, selectedSection, onSectionSelect }) {
  return (
    <div>
      <Paper
        className={classes.root}
        elevation={24}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Grid container spacing={0}>
          {/*  All scroll cols and details */}
          <Grid container item md={5} spacing={0}>
            {/* Scroll cols*/}
            <Grid container item md={12} spacing={0}>
              {/*  Department */}
              <Grid item md={4}>
                <LabelScrollCol title="Department">
                  <PinnedSubheaderList data={departments} onSelect={onDepartmentSelect} selected={selectedDepartment}/>
                </LabelScrollCol>
              </Grid>
              {/*  Course */}
              <Grid item md={4}>
                <LabelScrollCol title="Course">
                  <PinnedSubheaderList data={courses} onSelect={onCourseSelect} selected={selectedCourse.name}/>
                </LabelScrollCol>
              </Grid>
              {/*  Section */}
              <Grid item md={4}>
                <LabelScrollCol title="Section">
                  <PinnedSubheaderList data={sections} onSelect={onSectionSelect} selected={selectedSection}/>
                </LabelScrollCol>
              </Grid>
            </Grid>
            {/* Details */}
            <Grid item md={12}>
              <Details/>
            </Grid>
          </Grid>
          {/*  Schedule */}
          <Grid container item md={7}>
            <Grid item md={12}>
              <Schedule/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

Scheduler.propTypes = {
  classes: PropTypes.object.isRequired,
  departments: PropTypes.arrayOf(PropTypes.string).isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default withRoot(withStyles(styles)(Scheduler))
