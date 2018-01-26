import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { menu } from '../styles';

const MenuItem = ({ children, style }) => (
  <div style={{ ...menu.item, ...style }}>
    {children}
  </div>
);

MenuItem.defaultProps = {
  style: {},
};

MenuItem.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default Radium(MenuItem);
