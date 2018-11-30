import autobind from 'auto-bind';
import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    super();
    autobind(this);
    this.state = {};
  }

  componentDidMount() {
    fetch('/api/title')
      .then(response => response.json())
      .then(({ title }) => {
        this.setState({ title });
      });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="jumbotron hello-world">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default HelloWorld;
