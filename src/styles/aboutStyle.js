import { fadeInTop } from './keyframes';
import { color, viewport } from '../utils';

const aboutStyle = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    marginBottom: '0.5rem',
    opacity: 0,
    animation: '0.4s ease both',
    animationName: fadeInTop,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: color.BACKGROUND_SECONDARY,
    width: '80%',
    height: '80%',
    padding: '3rem',
    borderRadius: '5px',
    boxShadow: `4px 4px 4px ${color.BACKGROUND_SECONDARY_SHADOW}`,
    [viewport.large]: {
      width: '50%',
    },
  },
  header: {
    fontSize: '1.5rem',
    fontFamily: '"Indie Flower", cursive',
    borderBottom: '2px solid',
    padding: '0.2rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '2rem',
    marginBottom: '1rem',
  },
};

export default aboutStyle;
