
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Main() {
  return <App />;
}

ReactDOM.render(
  <Main />,
  document.querySelector('#root'),// eslint-disable-line
);
registerServiceWorker();
