import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import Contact from './containers/Contact/Contact';
import Navbar from './containers/NavBar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" component={HomePage} exact/>
        <Route path="/contact" component={Contact}/>
      </div>
    );
  }
}

export default App;
