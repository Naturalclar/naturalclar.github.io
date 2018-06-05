import color from '../abstracts/color';

const appStyle = {
  body: {
    color: color.TEXT_PRIMARY,
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
    gridTemplateAreas: '"header" "menu" "content" "footer"',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    fontFamily: '"Indie Flower", cursive',
  },
  active: {
    textShadow: `0 0 1rem ${color.TEXT_SHADOW},0 0 0.2rem ${color.TEXT_SHADOW}`,
  },
};

export default appStyle;
