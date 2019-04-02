import React from 'react'
import * as PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import withRoot from '../../withRoot'
import Bar from './bar'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    height: 300,
    minWidth: '100%'
  }
})

function LabelScrollCol ({ classes, title, children }) {
  return (
    <Paper className={classes.root} elevation={1} square>
      <Bar>
        {title}
      </Bar>
      {children}
    </Paper>
  )
}

LabelScrollCol.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withRoot(withStyles(styles)(LabelScrollCol))