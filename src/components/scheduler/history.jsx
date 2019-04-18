import React from 'react'
import * as PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis'
import Loading from '../loading'

const styles = theme => ({});

const History = ({data, loading, classes}) => {
  if (loading) {
    return <Loading extraClasses={classes.loading} />;
  }

  if (data === null) {
    return <p>No history found</p>
  }

  console.dir(classes);

  return (
    <XYPlot width={500} height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis top={4} bottom={0} title="GPA" position="middle" />
      <LineMarkSeries
        className="linemark-series"
        data={[
          {
            x: 1,
            y: 4
          },
          {
            x: 3,
            y: 2
          }
        ]}
        opacity={1}
        strokeStyle="solid"
        style={{}}
      />
    </XYPlot>
  );
}

History.propTypes = {
  data: PropTypes.shape({})
}

History.defaultProps = {
  data: null
}

export default withStyles(styles)(History);
