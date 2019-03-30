import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import { default as tamPrimaryMarkBWhite } from "../assets/images/TAM-PrimaryMarkB-white.svg";

const styles = theme => ({
	footer: {
    backgroundColor: theme.palette.secondary.dark,
		diplay: "flex",
		justifyContent: "space-around",
		paddingTop: 15,
		paddingBottom: 15,
	},
});

const Footer = ({ classes }) => {
	return (
		<div className={classes.footer}>
			<img src={tamPrimaryMarkBWhite} alt="TAMU" />
		</div>
	);
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Footer));
