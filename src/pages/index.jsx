import React, { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import Scheduler from '../components/scheduler'
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import { useDataApi } from '../utils'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  main: {
    maxWidth: 2000,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.sideGutter,
    paddingRight: theme.spacing.sideGutter,
    margin: 'auto'
  },
  nonFooter: {
    flex: '1 0 auto'
  },
  footer: {
    flexShrink: 0
  }
})

function Index ({ classes }) {
  // State
  const [selectedDepartment, updateDepartment] = useState('');
  const [selectedCourse, updateCourse] = useState({});
  const [selectedSection, updateSection] = useState({});
  const [sections, updateSections] = useState({});

  // Fetch data
  const departments = useDataApi('/course/departments', []);
  const courses = useDataApi(null, []);

  // Handle changes
  // Select the first department in list after data fetch of departments
  useEffect(() => {
    if (departments.data.length > 0) {
      updateDepartment(departments.data[0]);
    }
  }, [departments.data])

  // Fetch course info on department selection
  useEffect(() => {
    if (selectedDepartment !== '') {
      courses.doFetch(`/course/department?id=${selectedDepartment}`);
    }
  }, [selectedDepartment]);

  // Updates on course data fetch
  useEffect(() => {
    if (courses.data.length > 0) {
      updateCourse(courses.data[0]);
    }
  }, [courses.data]);

  // Updates on course selection change
  useEffect(() => {
    if (selectedCourse.hasOwnProperty('sections')) {
      console.log('updateing section')
      updateSections(selectedCourse.sections);
      updateSection(Object.values(selectedCourse.sections)[0]);
    }
  }, [selectedCourse]);

  // Handlers
  const onCourseSelect = (_, i) => {
    updateCourse(courses.data[i]);
  }
  const onSectionSelect = (_, i) => {
    updateSection(Object.values(selectedCourse.sections)[i]);
  }

  console.dir({
    DEPARTMENT: selectedDepartment,
    COURSE: selectedCourse,
    SECTION: selectedSection
  });
  return (
    <div className={classes.root}>
      <div className={classes.nonFooter}>
        <Header/>
        <NavBar/>
        <main className={classes.main}>
          <Typography variant="h2" gutterBottom>
            Scheduling in A Major
          </Typography>
          <Scheduler
            departments={departments.data}
            onDepartmentSelect={updateDepartment}
            selectedDepartment={selectedDepartment}
            onCourseSelect={onCourseSelect}
            courses={courses.data.map(c => c.name)}
            selectedCourse={selectedCourse}
            sections={Object.values(sections).map(s => `${s.name}-${s.section}-${s.instructor}`)}
            selectedSection={`${selectedSection.name}-${selectedSection.section}-${selectedSection.instructor}`}
            onSectionSelect={onSectionSelect}
          />
        </main>
      </div>
      <div className={classes.footer}>
        <Footer/>
      </div>
    </div>
  )
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Index))
