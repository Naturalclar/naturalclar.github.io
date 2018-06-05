import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { menu } from '../../styles';

const Menu = ({ children }) => (
  <div style={menu.main}>
    {children}
  </div>
);


Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Radium(Menu);
