import styled from 'styled-components';
import { color } from 'Styles/abstracts/';

export const StyledMenuItem = styled.li`
  margin: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.3);
    text-shadow: 0 0 1rem ${color.TEXT_SHADOW}, 0 0 0.2rem ${color.TEXT_SHADOW};
  }
`;

export const StyledMenu = styled.ul`
  text-align: center;
  list-style-type: none;
  grid-area: menu;
  display: flex;
  justify-content: center;
  align-items: center;
`;
