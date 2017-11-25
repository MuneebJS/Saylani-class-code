import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, NavLink } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink activeClassName="active"
          activeStyle={{ color: 'red' }}
          to={{ pathname: "/about" }}>about</NavLink> <br />
        <NavLink to="/contact">contact</NavLink>
      </div>
    );
  }
}

export default App;
