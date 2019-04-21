import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

export function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    minWidth: "100%"
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    if (this.props.tabs[value].ignored) {
      return;
    }
    this.setState({ value });
    if (this.props.handleChange) {
      this.props.handleChange(value);
    }
  };

  render() {
    const { classes, tabs, scrollable } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary" elevation={0} square>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant={scrollable ? "scrollable" : "standard"}
            scrollButtons="auto"
            indicatorColor="primary"
          >
            {tabs.map(({ id, label, icon, onClick }) => (
              <Tab
                key={id || label}
                label={label}
                icon={icon}
                onClick={onClick}
              />
            ))}
          </Tabs>
        </AppBar>
        <TabContainer>{tabs[value].content}</TabContainer>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  scrollable: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node
    })
  ).isRequired
};

SimpleTabs.defaultProps = {
  scrollable: false
};

export default withStyles(styles)(SimpleTabs);
