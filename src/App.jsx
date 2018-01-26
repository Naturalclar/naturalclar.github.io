import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Footer, Header, Menu, MenuItem } from './components';
import { Home, About, Contact, NotFound } from './views';
import { app } from './styles';

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
        style={app.link}
        activeStyle={app.active}
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
        <div style={app.body}>
          <Header title="naturalclar" />
          <Menu>
            {menuItems}
          </Menu>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer
            title="naturalclar"
            name="Jesse K."
          />
        </div>
      </Router>
    </StyleRoot>
  );
}


export default Radium(App);
