import { color } from '../utils';
import { fadeInLeft } from './keyframes';

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
