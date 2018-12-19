import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
display: flex;
justify-content: center;
align-items: center;
font-family: "Indie Flower", cursive;
color: inherit;
font-size: 2rem;
padding: 1rem 0;
`;

const Header = ({ title }) => (
  <HeaderWrapper>
    {title}
  </HeaderWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
