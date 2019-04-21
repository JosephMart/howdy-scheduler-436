import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Loading from "./loading";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import RemoveIcon from "@material-ui/icons/Remove";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  root: {
    width: "99%",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    height: "100%",
    maxHeight: "78%"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  loading: {
    height: "78%"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    // paddingTop: theme.spacing.unit,
    // paddingRight: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
    // paddingLeft: theme.spacing.unit * 10,
    // transition: theme.transitions.create('width'),
    width: "100%"
    // [theme.breakpoints.up('md')]: {
    //   width: 200,
    // },
  }
});

function PinnedSubheaderList({
  classes,
  data,
  onSelect,
  selected,
  loading,
  addable,
  addedItems,
  add,
  remove
}) {
  const [search, updateSearch] = useState("");

  useEffect(() => {
    updateSearch("");
  }, [data]);

  const searchChange = e => {
    const { value } = e.target;
    updateSearch(value);
  };

  if (loading) {
    return <Loading extraClasses={classes.loading} />;
  }

  const iconClick = (i, removeItem, name) => {
    if (removeItem) {
      return remove(name);
    }
    add(i);
  };
  return (
    <List component="nav" className={classes.root}>
      <ListItem divider>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={search}
          onChange={searchChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </ListItem>
      {data
        .filter(item => item.toLowerCase().search(search.toLowerCase()) !== -1)
        .map((d, i) => (
          <ListItem
            key={d}
            button
            divider
            alignItems="flex-start"
            onClick={e => onSelect(d, i)}
            selected={d === selected}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ListItemText primary={d} />
            {addable && (
              <ListItemSecondaryAction>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="Add"
                  onClick={e => iconClick(i, addedItems.includes(d), d)}
                  style={{ flexShrink: 0 }}
                >
                  {addedItems.includes(d) ? <RemoveIcon /> : <AddIcon />}
                </Fab>
              </ListItemSecondaryAction>
            )}
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
