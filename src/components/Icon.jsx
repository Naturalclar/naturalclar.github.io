import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Tooltip from './Tooltip';

const styles = {
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'FontAwesome',
    padding: '0.3rem',
    margin: '0.3rem',
    color: 'rgba(255,255,255,0.8)',
    background: 'rgba(0,0,0,.1)',
    textDecoration: 'none',
    borderRadius: '50%',
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      boxShadow: '2px 2px 2px rgba(0,0,0,.3)',
      background: 'rgba(0,0,0,.2)',
      color: 'white',
    },
  },
};


class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  handleMouseEnter() {
    this.setState({ hover: true });
  }
  handleMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {this.state.hover ? <Tooltip text={this.props.text} /> : null}
        <a
          href={this.props.href}
          style={styles.icon}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          {this.props.icon}
        </a>
      </div>
    );
  }
}

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Radium(Icon);
