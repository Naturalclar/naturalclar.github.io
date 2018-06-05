import React from 'react';
import links from '../utils/links';
import { ContactWrapper, contact } from '../styles';

const listItems = links.map((val, index) => (
  <li key={val.key}>
    <a
      href={val.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...contact.link, animationDelay: `${index * 0.1}s` }}
    >
      <span style={contact.icon}>
        {val.icon}
      </span>
      {val.text}
    </a>
  </li>
));

const Contact = () => (
  <ContactWrapper>
    <ul>
      {listItems}
    </ul>
  </ContactWrapper>
);


export default Contact;
