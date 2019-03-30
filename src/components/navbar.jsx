import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import withRoot from "../withRoot";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  appbar: {
    marginTop: 15,
    marginBottom: 15
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  navButton: {
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15
  }
});

const NavBar = ({ classes }) => {
	return (
		<div>
			<AppBar position="static" color="primary" className={classes.appbar}>
				<Toolbar className={classes.toolbar}>
          <Button href="#" className={classes.navButton}>
            <Typography color="secondary">
              Dashboard
            </Typography>
          </Button>
          <Button href="#" className={classes.navButton}>
            <Typography color="secondary">
              Resources
            </Typography>
          </Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRoot(withStyles(styles)(NavBar));
