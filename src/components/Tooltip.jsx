import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const appear = Radium.keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 0.8,
  },
});

const styles = {
  top: {
    position: 'absolute',
    bottom: '105%',
    left: '-7.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15rem',
    marginLeft: '50%',
    opacity: 0,
    animation: '0.3s both',
    animationName: appear,
  },
  topArrow: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#444 transparent transparent transparent',
  },
  text: {
    width: 'auto',
    background: '#444',
    padding: '0.3rem',
    borderRadius: '2px',
  },
};

function Tooltip(props) {
  return (
    <div style={styles[props.orientation]}>
      <div style={styles[`${props.orientation}Arrow`]} />
      <div style={styles.text}>
        {props.text}
      </div>
    </div>
  );
}

Tooltip.defaultProps = {
  orientation: 'top',
};

Tooltip.propTypes = {
  orientation: PropTypes.string,
  text: PropTypes.string.isRequired,
};


export default Radium(Tooltip);
