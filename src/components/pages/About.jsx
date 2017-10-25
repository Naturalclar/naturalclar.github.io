import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    fontFamily: '"Open Sans", cursive',
  },
  text: {
    fontSize: '1.3rem',
    lineHeight: '2rem',
    maxWidth: '80%',
  },
};

function About(props) {
  return (
    <div style={{ ...styles.home, ...props.style }}>
      <div style={styles.text}>
        Hi! My name is Jesse Katsumata, a front-end developer based in Union City, California. I have a degree in computer science &#x1f4bb; and minor in music &#x1f3b9;&#x1f3b6; . I'm also a clarinet player and have a strong passion in classical music!
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

export default About;

