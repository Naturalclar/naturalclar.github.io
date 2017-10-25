import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Color from '../../utils/Color';

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
    display:'flex',
    alignItems:'center',
    textDecoration: 'none',
    color: Color.TEXT_PRIMARY,
    margin: '0.5rem',
    transition: 'all .3s ease',
    ':hover': {
      textShadow: `0 0 1rem ${Color.TEXT_SHADOW},0 0 0.2rem ${Color.TEXT_SHADOW}`,
    },
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  icon: {
    fontFamily:'FontAwesome',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginRight: '0.5rem',
  }
};

const items = [
  {
    _key:'email',
    _text:'jesse.katsumata@gmail.com',
    _url:'mailto:jesse.katsumata@gmail.com',
    _icon:'\uf0e0',
  },
  {
    _key:'linkedin',
    _text:'LinkedIn',
    _url:'https://www.linkedin.com/in/jesse-katsumata-1a686462/',
    _icon:'\uf0e1',
  
  },
  {
    _key:'twitter',
    _text:'@Smashcat_clar',
    _url:'https://twitter.com/smashcat_clar',
    _icon:'\uf099',
  },
  {
    _key:'github',
    _text:'Github',
    _url: 'https://github.com/Naturalclar',
    _icon: '\uf09b',
  }
]

const listItems = items.map((val) => {
  return(
    <a 
      href={val._url} 
      target="_blank" 
      key={val._key}
      style={styles.link}
      >
      <span style={styles.icon}>
        {val._icon}
      </span>
      {val._text}
    </a>
  );
});

function Contact(props) {
  return (
    <div style={{...styles.contact , ...props.style}}>
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
