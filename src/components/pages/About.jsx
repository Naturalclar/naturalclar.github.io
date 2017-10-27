import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Color from '../../utils/Color';
import Viewport from '../../utils/Viewport';

const fadeIn = Radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-20%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const styles = {
  about: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    marginBottom: '0.5rem',
    opacity: 0,
    animation: '0.4s ease both',
    animationName: fadeIn,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: Color.BACKGROUND_SECONDARY,
    width: '80%',
    height: '80%',
    padding: '3rem',
    borderRadius: '5px',
    boxShadow: `4px 4px 4px ${Color.BACKGROUND_SECONDARY_SHADOW}`,
    [Viewport.large]: {
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
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: '2rem',
    marginBottom: '1rem',
  },
};

function About(props) {
  return (
    <div style={{ ...styles.about, ...props.style }}>
      <div style={styles.container}>
        <div style={styles.header}>
          About me
        </div>
        <div style={styles.text}>
          Hi! My name is Jesse Katsumata, a front-end developer based in Union City, California.
          I will help you make your dream website into reality, as I am on my way to making mine!
          I have a degree in computer science &#x1f4bb; and minor in music &#x1f3b9;&#x1f3b6; .
          I&apos;m also a clarinet player and have a strong passion in classical music!
        </div>
      </div>
    </div>
  );
}

About.defaultProps = {
  style: {},
};

About.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(About);

