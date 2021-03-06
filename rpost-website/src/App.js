import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/rpost-web" component={Home} />
          <Route exact path="/rpost-web/about" component={About} />
          <Route exact path="/rpost-web/privacy-policy" component={PrivacyPolicy} />
        </div>
      </Router>
    );
  }
}

export default App;
