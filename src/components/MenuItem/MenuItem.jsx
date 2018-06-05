import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from 'Styles/abstracts';

const MenuItemWrapper = styled.li`
  margin: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.3);
    text-shadow: 0 0 1rem ${color.TEXT_SHADOW}, 0 0 0.2rem ${color.TEXT_SHADOW};
  }
`;

const MenuItem = ({ children }) => (
  <MenuItemWrapper>
    {children}
  </MenuItemWrapper>
);

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuItem;
