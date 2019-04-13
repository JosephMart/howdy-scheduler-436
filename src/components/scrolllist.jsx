import React from "react";
import * as PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Loading from './loading'

const styles = theme => ({
  root: {
    width: "99%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    overflow: "auto",
    maxHeight: "78%"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  loading: {
    height: '78%'
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
});

function PinnedSubheaderList({ classes, data, onSelect, selected, loading }) {
  if (loading) {
    return <Loading extraClasses={classes.loading} />
  }
  return (
    <List component="nav" className={classes.root}>
      {data.map((d, i) => (
        <ListItem
          key={d}
          button
          divider
          alignItems="flex-start"
          onClick={e => onSelect(d, i)}
          selected={d === selected}
        >
          <ListItemText primary={d} />
        </ListItem>
      ))}
    </List>
  );
}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(PinnedSubheaderList);
