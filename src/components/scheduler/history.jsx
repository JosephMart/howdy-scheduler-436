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

const indexes = ['A', 'B', 'C', 'D', 'F', 'Q'];

function uniqByKeepLast(a, key) {
  return [
    ...new Map(
      a.map(x => [key(x), x])
    ).values()
  ]
}

const getLabel = d => (`${d.semester}-${d.year[2]}${d.year[3]}`);



const History = ({data, loading, classes}) => {
  if (loading) {
    return <Loading extraClasses={classes.loading} />;
  }

  if (data === null) {
    return <p>No history found</p>
  }

  const {semesters} = data;

  const plotData = uniqByKeepLast(semesters.map((d, x) => ({x: `${d.semester}-${d.year[2]}${d.year[3]}`, y: parseFloat(d.gpa, 10)})), i => i.x).slice(-6);
  console.log(plotData)

  return (
    <XYPlot width={500} height={500} xType="ordinal">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis top={4} bottom={0} title="GPA" position="middle" />
      <LineMarkSeries
        className="linemark-series"
        data={plotData}
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
