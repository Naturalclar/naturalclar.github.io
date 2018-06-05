import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenuItem } from 'Styles';

const MenuItem = ({ children }) => (
  <StyledMenuItem>
    {children}
  </StyledMenuItem>
);

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuItem;
