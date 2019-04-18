import React from "react";
import PropTypes from "prop-types";
import withRoot from "../../withRoot";
import { withStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Loading from '../loading'

const styles = theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center"
	},
	professorImage: {
		height: "150px",
		width: "150px",
	},
	info: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center"
	},
	nameTitleContainer: {
		margin: "20px",
		textAlign: "center",
	},
	name: {
		fontSize: "20px",
	},
	title: {
		fontSize: "17px",
		fontWeight: "400"
	},
	contactInfoContainer: {
		display: "grid",
		gridTemplateColumns: "auto auto"
	},
	contactInfo: {
		textAlign: "center",
		fontSize: "15px",
		padding: "10px"
	},
	notFound: {
		textAlign: "center"
	}
});

const profInitials = name => {
	if (name === undefined) {
		return '';
	}
	const list = name.split(' ');
	return list.length > 1 ? `${list[0][0]}${list[list.length - 1][0]}` : `${list[0][0]}`
}

const ProfessorInfo = ({prof, classes, loading}) => {
	if (loading) {
		return <Loading extraClasses={classes.loading} />;
	}
	return (
		prof !== undefined
		? (
			<div className={classes.root}>
				<Avatar className={classes.professorImage} alt={prof.name}>
					{profInitials(prof.name)}
				</Avatar>
				<div className={classes.info}>
					<div className={classes.nameTitleContainer}>
						<div className={classes.name}>{prof.name}</div>
						<div className={classes.title}>{prof.title}</div>
					</div>
					<div className={classes.contactInfoContainer}>
						<div className={classes.contactInfo}>{`Office: ${prof.office || "HRBB 111"}`}</div>
						<div className={classes.contactInfo}>{`Email: ${prof.email || "first.last@tamu.edu"}`}</div>
						<div className={classes.contactInfo}>{`Phone: ${prof.phoneNumber || "123-345-6789"}`}</div>
						<div className={classes.contactInfo}><a href={prof.website || "https://google.com"}>Personal Website</a></div>
					</div>
				</div>
			</div>
		): (
			<div className={classes.notFound}>To be determined</div>
		)
	)
}

ProfessorInfo.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(ProfessorInfo));
