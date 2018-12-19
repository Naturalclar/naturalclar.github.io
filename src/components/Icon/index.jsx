import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Tooltip from '../Tooltip';
import { StyledIcon } from '../../styles';

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
        <StyledIcon
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          {this.props.icon}
        </StyledIcon>
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
