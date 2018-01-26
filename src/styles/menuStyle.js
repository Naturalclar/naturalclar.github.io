import { color } from '../utils';

const menuStyle = {
  main: {
    gridArea: 'menu',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: '1rem',
    cursor: 'pointer',
    fontSize: '1.5rem',
    transition: 'all .3s ease',
    ':hover': {
      transform: 'scale(1.3)',
      textShadow: `0 0 1rem ${color.TEXT_SHADOW},0 0 0.2rem ${color.TEXT_SHADOW}`,
    },
  },
};

export default menuStyle;
