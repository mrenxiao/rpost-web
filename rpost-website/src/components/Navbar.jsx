import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <nav className="navbar navbar-expand-md navbar-light">

        <div className="container">
          <Link className="navbar-brand" to="/">RPOST</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/rpost-web">HOME<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rpost-web/privacy-policy">PRIVACY POLICY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rpost-web/about">ABOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar