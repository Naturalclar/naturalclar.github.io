import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render(){
    return (
      <div className='footer' style={{color:this.props.color}}>
        <div style={{width:'90%',height:'1px',background:this.props.color}}></div>
        <div style={{padding:'0.5rem 0'}}>{this.props.title} - Created by {this.props.name} &copy; 2017</div>
      </div>
    )
  }
}

Footer.defaultProps = {
  title: 'Hello World!',
  name: 'Smashcat',
  color: 'black',
}

Footer.propTypes={
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
}

export default Footer;

