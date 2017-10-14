import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Menu(props) {
  return (
    <div style={{ ...styles.menu, ...props.style }}>
      {props.children}
    </div>
  );
}

Menu.defaultProps = {
  style: {},
};

Menu.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default Radium(Menu);
