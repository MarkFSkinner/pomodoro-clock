import React, { Component } from 'react';
import Title from './components/Title';
import Controls from './components/Controls';
import Clock from './components/Clock';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='container text-center'>
        <Title />
        <Controls breakTime={this.props.myData.breakTime} sessionTime={this.props.myData.sessionTime} />
        <Clock />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myData: state.myData
  }
}

export default connect(mapStateToProps, {})(App);

