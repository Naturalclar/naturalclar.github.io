import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Icon from '../Icon';
import links from '../../utils/links';
import {
  StyledFooter,
  FooterLine,
  FooterText,
  FooterLink } from './StyledFooter';

const listItems = links.map(val => (
  <Icon
    key={val.key}
    href={val.url}
    icon={val.icon}
    text={val.text}
  />
));

const Footer = ({ title, name }) => (
  <StyledFooter>
    <FooterLine />
    <FooterLink>
      {listItems}
    </FooterLink>
    <FooterText>
      {title} - Created by {name} &copy; 2017
    </FooterText>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Radium(Footer);

