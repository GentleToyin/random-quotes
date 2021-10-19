import React, { Component } from 'react';
import './App.css';
import { GenerateQoutes } from './components/qoutes-generator';


class App extends Component {
  constructor() {
    super()
    this.state = {
      newIndex: Math.floor(Math.random() * (((49 - 1) + 1) + 1))
    }
  }
  handleQoute = () => {
    this.setState({ newIndex: this.state.newIndex + 1 })
  }
  render() {
    return (
      <div className="App">
        <GenerateQoutes index={this.state.newIndex} />
        <button onClick={this.handleQoute}>Generate New Quote</button>
      </div>
    );
  }

}

export default App;
