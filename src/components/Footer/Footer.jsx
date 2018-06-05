import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import links from '../../utils/links';
import {
  StyledFooter,
  FooterLine,
  FooterLink,
} from './StyledFooter';

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
    <p>
      {title} - Created by {name} &copy; 2017
    </p>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Footer;

