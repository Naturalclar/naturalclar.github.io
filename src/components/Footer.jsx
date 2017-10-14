import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  footer: {
    gridArea: 'footer',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  line: {
    width: '90%',
    height: '1px',
  },
  text: {
    padding: '1rem 0',
  },
};

function Footer(props) {
  return (
    <div style={{ ...styles.footer, ...props.style, color: props.color }}>
      <div style={{ ...styles.line, background: props.color }} />
      <div style={{ ...styles.text }}>{props.title} - Created by {props.name} &copy; 2017</div>
    </div>
  );
}

Footer.defaultProps = {
  title: 'Hello World!',
  name: 'Smashcat',
  color: 'black',
  style: {},
};

Footer.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(Footer);

