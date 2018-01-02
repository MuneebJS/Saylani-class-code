import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './reducers';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{store.getState()}</h1>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      </div>
    );
  }
}

export default App;
