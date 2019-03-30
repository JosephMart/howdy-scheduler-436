import React from 'react'
import * as PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import withRoot from '../../withRoot'
import Bar from './bar'

const styles = theme => {

}

function LabelScrollCol({ classes }) {
  return (
    <div>
      <Bar>
        <Typography>
          asd
        </Typography>
      </Bar>
    </div>
  )
}

LabelScrollCol.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(LabelScrollCol))