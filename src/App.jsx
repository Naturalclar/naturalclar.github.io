import React from 'react';
import Radium from 'radium';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

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
};

function App() {
  const menu = ['Home', 'About me', 'Contact me'];
  const menuItems = menu.map(val => <MenuItem key={val}>{val}</MenuItem>);

  return (
    <div style={styles.body}>
      <Header title="naturalclar" style={styles.header} />
      <Menu style={styles.menu}>
        {menuItems}
      </Menu>
      <Footer title="naturalclar" style={styles.footer} color="white" name="Jesse K." />
    </div>
  );
}


export default Radium(App);
