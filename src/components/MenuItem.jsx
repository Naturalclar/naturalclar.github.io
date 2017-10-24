import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  menuItem: {
    margin: '1rem',
    cursor: 'pointer',
    fontFamily: '"Indie Flower", cursive',
    fontSize: '1.5rem',
    transition: 'all .3s ease',
    ':hover': {
      transform: 'scale(1.3)',
      textShadow: '0 0 1rem red,0 0 0.2rem red',
    },
  },
};

function MenuItem(props) {
  return (
    <div style={{ ...styles.menuItem, ...props.style }}>
      {props.children}
    </div>
  );
}

MenuItem.defaultProps = {
  style: {},
};

MenuItem.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default Radium(MenuItem);
