import React from 'react';
import Radium from 'radium';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


const styles = {
  body: {
    color: 'white',
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
};

function App() {
  const menu = [
    {
      title: 'Home',
      path: '/',
      component: () => <Home />,
    },
    {
      title: 'About me',
      path: '/about',
      component: () => <About />,
    },
    {
      title: 'Contact me',
      path: '/contact',
      component: () => <Contact />,
    },
  ];
  const menuItems = menu.map(val => (
    <MenuItem key={val.title}>
      <Link style={styles.link} key={val.title} to={val.path} href={val.path}>{val.title}</Link>
    </MenuItem>));
  const routes = menu.map(val => (
    <Route key={val.title} path={val.path} component={val.component} />));
    
  return (
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
        <Footer title="naturalclar" style={styles.footer} color="white" name="Jesse K." />
      </div>
    </Router>
  );
}


export default Radium(App);
