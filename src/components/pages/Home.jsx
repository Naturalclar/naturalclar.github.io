import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

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
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    fontFamily: '"Indie Flower", cursive',
    opacity: 0,
    animation: '0.4s ease both',
    animationName: fadeIn,
  },
  title: {
    margin: '2rem 0',
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.5rem',
  },
};

function Home(props) {
  return (
    <div style={{ ...styles.home, ...props.style }}>
      <div style={styles.title}>
        Jesse K.
      </div>
      <div style={styles.subtitle}>
        Front-End Developer
      </div>
    </div>
  );
}

Home.defaultProps = {
  style: {},
};

Home.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(Home);
