
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    position: relative;
    height: 100%;
  }

  body {
    background: linear-gradient(to bottom, #00ae76, #aaeecc 100%) fixed;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    height: 100%;
  }
`;

function Main() {
  return <App />;
}

ReactDOM.render(
  <Main />,
  document.getElementById('root'),// eslint-disable-line
);
registerServiceWorker();
