import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { default as tamLogoBox } from "../assets/images/TAM-LogoBox.svg";
import withRoot from "../withRoot";

const styles = theme => ({
  header: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.sideGutter,
    paddingRight: theme.spacing.sideGutter,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  test: {
    color: theme.palette.primary.contrastText
  }
});

const Header = ({ classes }) => {
  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={tamLogoBox} alt="TAMU" />
        <div className={classes.logoText}>
          <Typography align="left" variant="h5" color="inherit">
            Texas A&M University
          </Typography>
          <Typography align="left" variant="subtitle1">
            Registration
          </Typography>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Header));
