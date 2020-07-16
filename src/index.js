import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from './Test';
import 'bulma';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
