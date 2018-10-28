import React, { Component } from 'react';
import Title from './components/Title';
import Controls from './components/Controls';
import Clock from './components/Clock';
import './App.css';

import { connect } from 'react-redux';

import {
  increaseBreakTime,
  decreaseBreakTime,
  increaseSessionTime,
  decreaseSessionTime,
  setCurrentTime
} from './actions';



class App extends Component {

  handleClick = (e) => {
    if(e.target.classList.contains('break-increase')) {
      this.props.increaseBreakTime();
    }
    if(e.target.classList.contains('break-decrease')) {
      if (this.props.myData.breakTime > 1) {
        this.props.decreaseBreakTime();
      }
    }
    if(e.target.classList.contains('session-increase')) {
      this.props.increaseSessionTime();
      this.props.setCurrentTime();
    }
    if(e.target.classList.contains('session-decrease')) {
      if (this.props.myData.sessionTime > 1) {
        this.props.decreaseSessionTime();
        this.props.setCurrentTime();
      }
    }
  }

  render() {
    return (
      <div className='container text-center'>
        <Title />
        <Controls
          breakTime={this.props.myData.breakTime}
          sessionTime={this.props.myData.sessionTime}
          handleClick={this.handleClick}
        />
        <Clock currentTime={this.props.myData.currentTime} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myData: state.myData
  }
}

export default connect(mapStateToProps, {
  increaseBreakTime,
  decreaseBreakTime,
  increaseSessionTime,
  decreaseSessionTime,
  setCurrentTime
})(App);

