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
    display: "flex",
    justifyContent: "space-around",
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
  }
});

const Header = ({ classes }) => {
  console.log(classes);

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={tamLogoBox} alt="TAMU" />
        <div className={classes.logoText}>
          <Typography align="left" variant="headline">
            Texas A&M University
          </Typography>
          <Typography align="left" variant="subheading">
            Registration
          </Typography>
        </div>
      </div>
      <Grid
        container
        spacing={8}
        alignItems="flex-end"
        justify="flex-end"
        style={{ width: "auto" }}
      >
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search" />
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Header));
