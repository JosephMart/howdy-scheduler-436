import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import withRoot from "../withRoot";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  toolbar: {
    display: "flex",
    paddingLeft: theme.spacing.sideGutter,
    paddingRight: theme.spacing.sideGutter
  },
  navButton: {
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15
  }
});

const NavBar = ({ classes }) => {
  const catalogURL = "https://catalog.tamu.edu/undergraduate/";
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Button href="#" className={classes.navButton}>
            <Typography color="inherit" style={{ color: "white" }}>
              Dashboard
            </Typography>
          </Button>
          <Button
            href="#"
            className={classes.navButton}
            onClick={e => window.open(catalogURL, "_blank")}
          >
            <Typography style={{ color: "white" }}>Resources</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRoot(withStyles(styles)(NavBar));
