import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTooltip,
  TooltipText,
  TooltipArrow,
} from 'Styles';

const Tooltip = ({ text }) => (
  <StyledTooltip>
    <TooltipArrow />
    <TooltipText>
      {text}
    </TooltipText>
  </StyledTooltip>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;
