import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/HelloWorld';
import 'style/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <HelloWorld title="Hello World" />
      </div>
    );
  }
}

export default hot(module)(App);
