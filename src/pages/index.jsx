import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Scheduler from "../components/scheduler";
import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { DAYS, numberToTime, useDataApi } from '../utils'

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  main: {
    maxWidth: 2000,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.sideGutter,
    paddingRight: theme.spacing.sideGutter,
    margin: "auto"
  },
  nonFooter: {
    flex: "1 0 auto"
  },
  footer: {
    flexShrink: 0
  }
});

function Index({ classes }) {
  // State
  const [selectedDepartment, updateDepartment] = useState("");
  const [selectedCourse, updateCourse] = useState({});
  const [selectedSection, updateSection] = useState({});
  const [sections, updateSections] = useState({});
  const [schedules, updateSchedules] = useState([[]]);
  const [currentScheduleIndex, updateScheduleIndex] = useState(0);

  // Fetch data
  const departments = useDataApi("/course/departments", []);
  const courses = useDataApi(null, []);
  const professor = useDataApi(null, {});

  // Handle changes
  // Select the first department in list after data fetch of departments
  useEffect(() => {
    if (departments.data.length > 0) {
      updateDepartment(departments.data[0]);
    } else {
      updateDepartment("");
    }
  }, [departments.data]);

  // Fetch course info on department selection
  useEffect(() => {
    if (selectedDepartment !== "") {
      courses.doFetch(`/course/department?id=${selectedDepartment}`);
    }
  }, [selectedDepartment]);

  // Updates on course data fetch
  useEffect(() => {
    if (courses.data.length > 0) {
      updateCourse(courses.data[0]);
    } else {
      updateCourse({});
    }
  }, [courses.data]);

  // Updates on course selection change
  useEffect(() => {
    if (selectedCourse.hasOwnProperty("sections")) {
      updateSections(selectedCourse.sections);
      updateSection(Object.values(selectedCourse.sections)[0]);
    } else {
      updateSections({});
      updateSection({});
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedSection.instructorId) {
      professor.doFetch(`/instructor/${selectedSection.instructorId}`);
    }
  }, [selectedSection]);

  useEffect(() => {
    updateScheduleIndex(schedules.length - 1);
  }, [schedules.length]);

  // Handlers
  const onCourseSelect = (_, i) => {
    updateCourse(courses.data[i]);
  };
  const onSectionSelect = (_, i) => {
    updateSection(Object.values(selectedCourse.sections)[i]);
  };

  // Add course to current schedule
  const addCourse = sectionsIndex => {
    const section = Object.values(sections)[sectionsIndex];

    const data = [];
    for (let i = 0; i < DAYS.length; i++) {
      let meetings = section.meetings[DAYS[i]];
      for (let j = 0; j < meetings.length; j++) {
        const meeting = meetings[j];
        const [startHour, startMin] = numberToTime(meeting.start);
        const [endHour, endMin] = numberToTime(meeting.end);
        data.push({
          title: `${selectedDepartment}-${selectedCourse._id.split('_')[1]}-${section.section}-${meeting.type}`,
          id: `${section.name}-${section.section}-${section.instructor}`,
          startDate: new Date(2018, 5, 25 + i, startHour, startMin),
          endDate: new Date(2018, 5, 25 + i, endHour, endMin),
        })
      }
    }
    updateSchedules([
      ...schedules.slice(0, currentScheduleIndex),
      [...schedules[currentScheduleIndex], ...data],
      ...schedules.slice(currentScheduleIndex + 1),
    ]);
  };

  // Remove course from current schedule
  const removeCourse = id => {
    updateSchedules([
      ...schedules.slice(0, currentScheduleIndex),
      schedules[currentScheduleIndex].filter(s => s.id !== id),
      ...schedules.slice(currentScheduleIndex + 1),
    ]);
  };

  // Add new blank schedule and set it active
  const addSchedule = () => {
    updateSchedules([...schedules, []]);
  };

  // console.dir({
  //   DEPARTMENT: selectedDepartment,
  //   COURSE: selectedCourse,
  //   SECTION: selectedSection
  // });
  console.log(schedules, currentScheduleIndex);
  return (
    <div className={classes.root}>
      <div className={classes.nonFooter}>
        <Header />
        <NavBar />
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
            sections={Object.values(sections).map(
              s => `${s.name}-${s.section}-${s.instructor}`
            )}
            selectedSection={selectedSection}
            onSectionSelect={onSectionSelect}
            departmentsLoading={
              departments.isLoading || departments.data.length === 0
            }
            coursesLoading={courses.isLoading || courses.data.length === 0}
            sectionsLoading={
              courses.isLoading ||
              courses.data.length === 0 ||
              Object.keys(sections).length === 0
            }
            professor={professor.data}
            professorLoading={professor.isLoading || (Object.keys(professor).length === 0)}
            schedules={schedules}
            currentScheduleIndex={currentScheduleIndex}
            addCourse={addCourse}
            removeCourse={removeCourse}
            addSchedule={addSchedule}
            updateScheduleIndex={updateScheduleIndex}
          />
        </main>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
