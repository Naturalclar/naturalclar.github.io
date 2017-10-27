import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Color from './utils/Color';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const styles = {
  body: {
    color: Color.TEXT_PRIMARY,
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
    gridTemplateAreas: '"header" "menu" "content" "footer"',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  header: {
    gridArea: 'header',
  },
  footer: {
    gridArea: 'footer',
  },
  menu: {
    gridArea: 'menu',
  },
  content: {
    gridArea: 'content',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  active: {
    textShadow: `0 0 1rem ${Color.TEXT_SHADOW},0 0 0.2rem ${Color.TEXT_SHADOW}`,
  },
};

function App() {
  const menu = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About me',
      path: '/about',
    },
    {
      title: 'Contact me',
      path: '/contact',
    },
  ];
  const menuItems = menu.map(val => (
    <MenuItem key={val.title}>
      <NavLink
        style={styles.link}
        activeStyle={styles.active}
        key={val.title}
        to={val.path}
        href={val.path}
        exact
      >{val.title}
      </NavLink>
    </MenuItem>
  ));
  return (
    <StyleRoot>
      <Router>
        <div style={styles.body}>
          <Header title="naturalclar" style={styles.header} />
          <Menu style={styles.menu}>
            {menuItems}
          </Menu>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer
            title="naturalclar"
            style={styles.footer}
            color={Color.TEXT_PRIMARY}
            name="Jesse K."
          />
        </div>
      </Router>
    </StyleRoot>
  );
}


export default Radium(App);
