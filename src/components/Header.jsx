import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { header } from '../styles';

const Header = ({ title }) => (
  <header style={header.main}>
    {title}
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Radium(Header);
