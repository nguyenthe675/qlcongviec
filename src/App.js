import React, { Component } from 'react';
//components
import Header from './components/Header';
//
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel,faCoffee,faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faStroopwafel,fab,faCoffee,faAppleAlt)

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* Navbar */}
        <Header></Header>
        {/* Side-Nav */}
        {/* Content */}
        {/* Navbar */}
      </div>
    );
  }
}

export default App;
