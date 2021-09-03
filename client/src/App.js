import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';

class App extends Component {
  state = {}
  handleItemClick = (e, {name}) => this.setState({activeItem: name }) 
   
  render() {
    return (

      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
        
      </Router>
    );
  }
}

export default App;
