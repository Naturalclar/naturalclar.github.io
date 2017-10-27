import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Icon from './Icon';

const styles = {
  footer: {
    gridArea: 'footer',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '2rem',
  },
  line: {
    width: '90%',
    height: '1px',
  },
  text: {
    padding: '1rem 0',
  },
  links: {
    display: 'flex',
    marginTop: '0.5rem',
  },
};

const items = [
  {
    key: 'email',
    text: 'jesse.katsumata@gmail.com',
    url: 'mailto:jesse.katsumata@gmail.com',
    icon: '\uf0e0',
  },
  {
    key: 'linkedin',
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jesse-katsumata-1a686462/',
    icon: '\uf0e1',
  },
  {
    key: 'twitter',
    text: '@Smashcat_clar',
    url: 'https://twitter.com/smashcat_clar',
    icon: '\uf099',
  },
  {
    key: 'github',
    text: 'Github',
    url: 'https://github.com/Naturalclar',
    icon: '\uf09b',
  },
  {
    key: 'codepen',
    text: 'CodePen',
    url: 'https://codepen.io/naturalclar',
    icon: '\uf1cb',
  },
];

const listItems = items.map(val => (
  <Icon
    key={val.key}
    href={val.url}
    icon={val.icon}
    text={val.text}
  />
));


function Footer(props) {
  return (
    <div style={{ ...styles.footer, ...props.style, color: props.color }}>
      <div style={{ ...styles.line, background: props.color }} />
      <div style={styles.links}>
        {listItems}
      </div>
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

