import styled from 'styled-components';
import { fadeInLeft } from 'Utils/keyframes';
import { color } from '../abstracts';

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.3 ease-in-out;
    list-style-type: none;
  }
`;

const contactStyle = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease-in-out',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: color.TEXT_PRIMARY,
    margin: '0.5rem',
    opacity: 0,
    transition: 'all .3s ease',
    animation: '0.4s ease both',
    animationName: fadeInLeft,
    ':hover': {
      textShadow: `0 0 1rem ${color.TEXT_SHADOW},0 0 0.2rem ${color.TEXT_SHADOW}`,
    },
  },
  icon: {
    fontFamily: 'FontAwesome',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0.5rem',
  },
};

export default contactStyle;
