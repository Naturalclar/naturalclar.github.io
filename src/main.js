import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './main.css';
import Footer from './components/Footer.js';

class Main extends Component {
  render() {
    return (
      <div className='grid'>
        <div className='header'>
          <div className='header_title'>naturalclar</div>
          <div className='header_subtitle'>Coming soon...</div>
        </div>
        <Footer title='naturalclar' color='white'/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />, document.querySelector('#root')
);