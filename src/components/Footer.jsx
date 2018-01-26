import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Icon from './Icon';
import { footer } from '../styles';
import { links } from '../utils';

const listItems = links.map(val => (
  <Icon
    key={val.key}
    href={val.url}
    icon={val.icon}
    text={val.text}
  />
));

const Footer = ({ title, name }) => (
  <footer style={footer.main}>
    <div style={footer.line} />
    <div style={footer.links}>
      {listItems}
    </div>
    <div style={footer.text}>{title} - Created by {name} &copy; 2017</div>
  </footer>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Radium(Footer);

