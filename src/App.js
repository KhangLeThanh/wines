import React, { Component } from 'react';
import {  Route, BrowserRouter as Router,  Switch } from 'react-router-dom';
import HomePage from './components/HomePage';


class App extends Component {
  
  
  render() {
      return (
        
        <Router>
            <Switch>
              <Route path="/" component={HomePage} exact />
            </Switch>
            
        </Router>
      );
  }
}

export default App;