import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
  text-align: center;
  list-style-type: none;
  grid-area: menu;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = ({ children }) => (
  <MenuWrapper>
    {children}
  </MenuWrapper>
);

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
