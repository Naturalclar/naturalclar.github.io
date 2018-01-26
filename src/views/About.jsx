import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { about } from '../styles';

function About(props) {
  return (
    <main style={{ ...about.main, ...props.style }}>
      <div style={about.container}>
        <div style={about.header}>
          About me
        </div>
        <div style={about.text}>
          Hi! My name is Jesse Katsumata, a front-end developer based in Union City, California.
          I will help you make your dream website into reality, as I am on my way to making mine!
          I have a degree in computer science &#x1f4bb; and minor in music &#x1f3b9;&#x1f3b6; .
          I mainly use React with Redux to build my applications for work.
          I&apos;m also a clarinet player and have a strong passion in classical music!
        </div>
      </div>
    </main>
  );
}

About.defaultProps = {
  style: {},
};

About.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(About);

