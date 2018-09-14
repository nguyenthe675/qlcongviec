import React, { Component } from 'react';

//components
import Header from './components/Header';
import SideNav from './components/SideNav';
import BaseContent from './components/BaseContent';
//
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel,faCoffee,faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faStroopwafel,fab,faCoffee,faAppleAlt)

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* Navbar */}
        <Header></Header>
        {/* Side-Nav */}
        <SideNav></SideNav>
        {/* Content */}
        <BaseContent></BaseContent>
        {/* Navbar */}
      </div>
    );
  }
}

export default App;
