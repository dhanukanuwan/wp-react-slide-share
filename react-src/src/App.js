import React, { Component } from 'react';
import logo from './images/meyer-logo.png';
import './css/main.min.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="App full-height">
        <div className="container-fluid slide-share-wrap full-height">
          <div className="row no-gutters full-height">
            <div className="col-sm-12 col-md-3">
              <div className="slide-share-left full-height">
                <a href="/" className="site-logo">
                  <img src={logo} className="img-responsive" alt="app-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
