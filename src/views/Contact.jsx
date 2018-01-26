import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { links } from '../utils/';
import { contact } from '../styles';

const listItems = links.map((val, index) => (
  <a
    href={val.url}
    target="_blank"
    rel="noopener noreferrer"
    key={val.key}
    style={{ ...contact.link, animationDelay: `${index * 0.1}s` }}
  >
    <span style={contact.icon}>
      {val.icon}
    </span>
    {val.text}
  </a>
));

function Contact(props) {
  return (
    <main style={{ ...contact.main, ...props.style }}>
      <div style={contact.list}>
        {listItems}
      </div>
    </main>
  );
}

Contact.defaultProps = {
  style: {},
};

Contact.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Radium(Contact);
