import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { isOn: false }

  toggle = (e) => {
    this.setState(prevState => ({ isOn: !prevState.isOn }))
  };

  render() {
    const dipslayText = this.state.isOn ? 'On' : 'Off';
    return (
      <div className="App">
        <h1 className="display">{dipslayText}</h1>
        <button className="toggle" onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default App;

