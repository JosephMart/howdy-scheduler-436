import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import withRoot from "../../withRoot";
import PropTypes, { number } from "prop-types";
import { numberToTimeAsString } from "../../utils";

const styles = theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	topDetails: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "20px"
	},
	topLeftDetails: {
		display: "flex",
		flexDirection: "column"
	},
	topRightDetails: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "end"
	}
});

const CourseDetails = ({course, section, classes, professor}) => {
	let dept;
	let courseNum;
	let courseName;
	if (course.name !== undefined) {
		const courseNameSplit = course.name.split(" ");
		dept = courseNameSplit[0];
		courseNum = courseNameSplit[1];
		courseName = courseNameSplit.slice(2).join(" ");
	}

	let meetings = new Array(5).fill([]);
	for (const key in section.meetings) {
		if (key === "M") {
			meetings[0] = section.meetings[key];
		} else if (key === "T") {
			meetings[1] = section.meetings[key];
		} else if (key === "W") {
			meetings[2] = section.meetings[key];
		} else if (key === "R") {
			meetings[3] = section.meetings[key];
		} else if (key === "F") {
			meetings[4] = section.meetings[key];
		}
	}

	const days = ["M", "T", "W", "R", "F"];

	return (
		course !== undefined && section !== undefined
		? (
			<div className={classes.root}>
				<div className={classes.topDetails}>
					<div className={classes.topLeftDetails}>
						<div>
							<Typography variant="h6">
								{dept}-{courseNum}-{section.section}
							</Typography>
							<Typography variant="h6">{professor.name}</Typography>
						</div>
						<div>
							<Typography>CRN: {section.crn}</Typography>
							<Typography>2 Remaining Seats (23/25)</Typography>
						</div>
					</div>
					<div className={classes.topRightDetails}>
						<Typography>{Math.abs(section.credits)} Credit(s)</Typography>
						<div>
							{meetings.map((day, i) => {
								return day.length !== 0 ? <Typography key={i}>{`${days[i]}: ` + day.map(meet => `${numberToTimeAsString(meet.start)} - ${numberToTimeAsString(meet.end)}`).join(", ")}</Typography> : undefined
							})}
						</div>
					</div>
				</div>
				<div>
					<div>
						<Typography variant="subtitle1">{courseName}</Typography>
						<Typography style={{marginBottom: 20}}>This is my description</Typography>
					</div>
					<div>
						<Typography><strong>Prerequisites:</strong></Typography>
						<Typography><strong>Requirements:</strong>{section.honors ? " Enrolled in honors" : ""}</Typography>
					</div>
				</div>
			</div>
		) : (
			<div>No course selected</div>
		)
	);
}

CourseDetails.propTypes = {
	professor: PropTypes.object.isRequired,
	course: PropTypes.object.isRequired,
	section: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(CourseDetails));
