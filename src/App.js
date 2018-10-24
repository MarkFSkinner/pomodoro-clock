import React, { Component } from 'react';
import Title from './components/Title';
import Controls from './components/Controls';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Controls />
        <Clock />
      </div>
    );
  }
}

export default App;
