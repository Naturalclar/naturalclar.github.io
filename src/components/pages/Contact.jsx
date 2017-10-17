import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    fontFamily: '"Indie Flower", cursive',
  },
  title: {
    margin: '2rem 0',
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.5rem',
  },
};

function Contact(props) {
  return (
    <div style={{ ...styles.home, ...props.style }}>
      <div style={styles.title}>
        This is a Contact me page
      </div>
      <div style={styles.subtitle}>
        Hello World!
      </div>
    </div>
  );
}

Contact.defaultProps = {
  style: {},
};

Contact.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Contact;
