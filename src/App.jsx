import React from 'react';
import styled from 'styled-components';
import color from 'Styles/abstracts/color';
import { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Footer, Header, Menu, MenuItem } from './components';
import { Home, About, Contact, NotFound } from './views';


const AppWrapper = styled.div`
  color: ${color.TEXT_PRIMARY};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Body = styled.main`
  flex: 1;
`;

// This is required to set styles for active class
const activeClassName = 'active';
const LinkWrapper = styled(NavLink).attrs({
  activeClassName,
})`
  color: inherit;
  text-decoration: none;
  font-family: 'Indie Flower', none;
  &.${activeClassName} {
    text-shadow: 0 0 1rem ${color.TEXT_SHADOW}, 0 0 0.2rem ${color.TEXT_SHADOW}
  }
`;

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
      <LinkWrapper
        activeClassName={activeClassName}
        key={val.title}
        to={val.path}
        href={val.path}
        exact
      >{val.title}
      </LinkWrapper>
    </MenuItem>
  ));
  return (
    <StyleRoot>
      <Router>
        <AppWrapper>
          <Header title="naturalclar" />
          <Menu>
            {menuItems}
          </Menu>
          <Body>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Body>
          <Footer
            title="naturalclar"
            name="Jesse K."
          />
        </AppWrapper>
      </Router>
    </StyleRoot>
  );
}


export default App;
