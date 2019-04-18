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
  return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineMarkSeries
        className="linemark-series-example"
        style={{
          strokeWidth: '3px'
        }}
        // lineStyle={{stroke: 'red'}}
        // markStyle={{stroke: 'blue'}}
        data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
      />
      <LineMarkSeries
        className="linemark-series-example-2"
        curve={'curveMonotoneX'}
        data={[{x: 1, y: 11}, {x: 1.5, y: 29}, {x: 3, y: 7}]}
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
