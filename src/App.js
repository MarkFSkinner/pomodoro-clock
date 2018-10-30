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
  setOnBreak
} from './actions';



class App extends Component {

  /*timer = (start, duration) => {
    const remaining = duration * 60 - (((Date.now() - start) / 1000) | 0);
    let hours = (remaining / 3600) | 0;
    let minutes = (remaining / 60) % 60 | 0;
    let seconds = (remaining % 60) | 0;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (remaining >= 3600) {
      //$('#' + display).html(hours + ":" + minutes + ":" + seconds);
      const time = hours + ":" + minutes + ":" + seconds;
      this.props.updateTime(time);
    } else {
      //$('#' + display).html(minutes + ":" + seconds);
      const time = minutes + ":" + seconds;
      this.props.updateTime(time);
    }
    if (remaining === 0) {
      audio.play();
      //$('#status').removeClass('animated pulse');
    }
    if (remaining < 0) {
      clearInterval(interval);
      if (onBreak === false) {
        totalTime = breakTime * 60;
        startTimer(totalTime, "current-time");
        $('#status').html("BREAK!");
        $('.circle').css("background-color", "#f03232");
        $('.circle').css("border", "0.15rem solid #8d0303");
        $('#status').addClass('animated pulse');
        onBreak = true;
      } else {
        totalTime = sessionTime * 60;
        startTimer(totalTime, "current-time");
        $('#status').html("SESSION");
        $('.circle').css("background-color", "#0de30d");
        $('.circle').css("border", "0.15rem solid green");
        $('#status').addClass('animated pulse');
        onBreak = false;
      }
    }
  }*/

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
      }
      if (remaining < 0) {
        clearInterval(interval);
        if (this.props.myData.onBreak === false) {
          const totalTime = this.props.myData.breakTime;
          this.startTimer(totalTime);
          this.props.updateStatus("BREAK!");
          //$('.circle').css("background-color", "#f03232");
          //$('.circle').css("border", "0.15rem solid #8d0303");
          //$('#status').addClass('animated pulse');
          this.props.setOnBreak();
        } else {
          const totalTime = this.props.myData.sessionTime;
          this.startTimer(totalTime);
          this.props.updateStatus("SESSION");
          //$('.circle').css("background-color", "#0de30d");
          //$('.circle').css("border", "0.15rem solid green");
          //$('#status').addClass('animated pulse');
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
  setOnBreak
})(App);

