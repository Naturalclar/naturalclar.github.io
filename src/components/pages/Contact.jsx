import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Color from '../../utils/Color';

const fadeIn = Radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-30%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease-in-out',
    fontFamily: '"Open Sans", sans-serif',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: Color.TEXT_PRIMARY,
    margin: '0.5rem',
    opacity: 0,
    transition: 'all .3s ease',
    animation: '0.4s ease both',
    animationName: fadeIn,
    ':hover': {
      textShadow: `0 0 1rem ${Color.TEXT_SHADOW},0 0 0.2rem ${Color.TEXT_SHADOW}`,
    },
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'FontAwesome',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0.5rem',
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

const listItems = items.map((val, index) => (
  <a
    href={val.url}
    target="_blank"
    key={val.key}
    style={{ ...styles.link, animationDelay: `${index * 0.1}s` }}
  >
    <span style={styles.icon}>
      {val.icon}
    </span>
    {val.text}
  </a>
));

function Contact(props) {
  return (
    <div style={{ ...styles.contact, ...props.style }}>
      <div style={styles.list}>
        {listItems}
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

export default Radium(Contact);
