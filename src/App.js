import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import LandingPage from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/Home" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path ="/Contact" component={Contact} />
            </Switch>
      </Router>
      </div>
    );
  }
};

export default App;