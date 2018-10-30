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
  setCurrentTime,
  updateTime,
  updateStatus,
  setOnBreak,
  updateAnimation
} from './actions';



class App extends Component {

  startTimer = (duration) => {
    const start = Date.now();
    const timer = () => {
      const remaining = duration * 60 - (((Date.now() - start) / 1000) | 0);
      let hours = (remaining / 3600) | 0;
      let minutes = (remaining / 60) % 60 | 0;
      let seconds = (remaining % 60) | 0;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      if (remaining >= 3600) {
        const time = hours + ":" + minutes + ":" + seconds;
        this.props.updateTime(time);
      } else {
        const time = minutes + ":" + seconds;
        this.props.updateTime(time);
      }
      if (remaining === 0) {
        this.props.myData.audio.play();
        //$('#status').removeClass('animated pulse');
        this.props.updateAnimation('countdown-data');
      }
      if (remaining < 0) {
        clearInterval(interval);
        if (this.props.myData.onBreak === false) {
          const totalTime = this.props.myData.breakTime;
          this.startTimer(totalTime);
          this.props.updateStatus("BREAK!");
          document.getElementsByClassName('circle')[0].style.backgroundColor = "#f03232";
          document.getElementsByClassName('circle')[0].style.border = "0.15rem solid #8d0303";
          //$('#status').addClass('animated pulse');
          this.props.updateAnimation('countdown-data animated pulse');
          this.props.setOnBreak();
        } else {
          const totalTime = this.props.myData.sessionTime;
          this.startTimer(totalTime);
          this.props.updateStatus("SESSION");
          document.getElementsByClassName('circle')[0].style.backgroundColor = "#0de30d";
          document.getElementsByClassName('circle')[0].style.border = "0.15rem solid green";
          //$('#status').addClass('animated pulse');
          this.props.updateAnimation('countdown-data animated pulse');
          this.props.setOnBreak();
        }
      }
    }
    timer();
    const interval = setInterval(timer, 1000);
  }

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
    if(e.target.classList.contains('circle')) {
      this.props.updateAnimation('countdown-data animated pulse');
      this.startTimer(this.props.myData.currentTime);
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
        <Clock currentTime={this.props.myData.currentTime}
          status={this.props.myData.status}
          handleClick={this.handleClick}
          animated={this.props.myData.animated}
        />
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
  setCurrentTime,
  updateTime,
  updateStatus,
  setOnBreak,
  updateAnimation
})(App);

