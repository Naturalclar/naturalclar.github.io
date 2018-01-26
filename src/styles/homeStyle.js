import { fadeInTop } from './keyframes';

const homeStyle = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    fontFamily: '"Indie Flower", cursive',
    opacity: 0,
    animation: '0.4s ease both',
    animationName: fadeInTop,
  },
  title: {
    margin: '2rem 0',
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.5rem',
  },
};

export default homeStyle;
