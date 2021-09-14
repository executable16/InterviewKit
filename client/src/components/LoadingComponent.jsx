import React, { Component } from 'react';

import spinner from './images/spinner.svg'
import './css/LoadingComponent.css';

class LoadingComponent extends Component {
  
  render(){
    return (
      <div className="Loader">
        <header className="Loader-header">
          <img src={spinner} className="Loader-logo" alt="logo" />
          <p className="subtitle3">Oh Snap ! You don't have any Bookmarks for this category.</p>
        </header>
      </div>
    );
  }
  
}

export default LoadingComponent;
