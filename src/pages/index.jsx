import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Scheduler from "../components/scheduler";
import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

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
  return (
    <div className={classes.root}>
      <div className={classes.nonFooter}>
        <Header />
        <NavBar />
        <main className={classes.main}>
          <Typography variant="h2" gutterBottom>
            Scheduling in A Major
          </Typography>
          <Scheduler />
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
