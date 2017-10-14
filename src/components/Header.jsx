import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Indie Flower", cursive',
    fontSize: '2rem',
    color: 'white',
    padding: '1rem 0',
  },
};

function Header(props) {
  return (
    <div style={{ ...styles.header, ...props.style }}>
      {props.title}
    </div>
  );
}

Header.defaultProps = {
  title: 'Hello World!',
  style: {},
};

Header.propTypes = {
  title: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(Header);
