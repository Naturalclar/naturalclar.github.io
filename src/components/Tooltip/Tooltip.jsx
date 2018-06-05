import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { tooltip } from '../../styles';

const Tooltip = ({ orientation, text }) => (
  <div style={tooltip[orientation]}>
    <div style={tooltip[`${orientation}Arrow`]} />
    <div style={tooltip.text}>
      {text}
    </div>
  </div>
);

Tooltip.defaultProps = {
  orientation: 'top',
};

Tooltip.propTypes = {
  orientation: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Radium(Tooltip);
