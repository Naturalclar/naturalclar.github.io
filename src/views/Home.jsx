import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { home } from '../styles';

function Home(props) {
  return (
    <main style={{ ...home.main, ...props.style }}>
      <div style={home.title}>
        Jesse K.
      </div>
      <div style={home.subtitle}>
        Front-End Developer
      </div>
    </main>
  );
}

Home.defaultProps = {
  style: {},
};

Home.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(Home);
