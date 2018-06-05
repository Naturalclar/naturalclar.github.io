import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';

const Header = ({ title }) => (
  <StyledHeader>
    {title}
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
