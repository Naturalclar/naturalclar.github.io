import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenu } from 'Styles';

const Menu = ({ children }) => (
  <StyledMenu>
    {children}
  </StyledMenu>
);


Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
