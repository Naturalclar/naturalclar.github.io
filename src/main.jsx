import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './main.css';
import App from './App';

function Main() {
  return <App />;
}

ReactDOM.render(<Main />, document.querySelector('#root'));
