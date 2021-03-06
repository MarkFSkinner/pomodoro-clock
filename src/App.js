import React, { Component } from 'react';
import Title from './components/Title';
import Controls from './components/Controls';
import Clock from './components/Clock';
import Reset from './components/Reset';
import './App.css';

import { connect } from 'react-redux';

import {
  increaseBreakTime,
  decreaseBreakTime,
  increaseSessionTime,
  decreaseSessionTime,
  updateTime,
  updateStatus,
  setOnBreak,
  updateAnimation,
  setStarted,
  setPaused,
  setRemaining,
  startInterval,
  sessionCurrentTime,
  breakCurrentTime,
  resetClock
} from './actions';


class App extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
    document.addEventListener('keypress', this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
    document.removeEventListener('keypress', this.handleKeypress);
  }

  startTimer = (duration) => {
    const start = Date.now();
    const timer = () => {
      const remaining = duration * 60 - (((Date.now() - start) / 1000) | 0);
      this.props.setRemaining(remaining);
      let hours = (remaining / 3600) | 0;
      let minutes = (remaining / 60) % 60 | 0;
      let seconds = (remaining % 60) | 0;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      if (remaining >= 3600) {
        const time = hours + ':' + minutes + ':' + seconds;
        this.props.updateTime(time);
      } else {
        const time = minutes + ':' + seconds;
        this.props.updateTime(time);
      }
      if (remaining === 0) {
        let alarm = this.props.myData.audio;
        alarm.play();
        setTimeout(function(){
          alarm.pause();
          alarm.currentTime = 0;
        }, 3500);
        this.props.updateAnimation('countdown-data');
      }
      if (remaining < 0) {
        clearInterval(this.props.myData.interval);
        if (this.props.myData.onBreak) {
          const totalTime = this.props.myData.sessionTime;
          this.startTimer(totalTime);
          this.props.updateStatus('SESSION');
          document.getElementsByClassName('circle')[0].style.backgroundColor = '#0de30d';
          document.getElementsByClassName('circle')[0].style.border = '0.4rem solid green';
          this.props.updateAnimation('countdown-data animated pulse');
          this.props.setOnBreak();
        } else {
          const totalTime = this.props.myData.breakTime;
          this.startTimer(totalTime);
          this.props.updateStatus('BREAK!');
          document.getElementsByClassName('circle')[0].style.backgroundColor = '#f03232';
          document.getElementsByClassName('circle')[0].style.border = '0.4rem solid #8d0303';
          this.props.updateAnimation('countdown-data animated pulse');
          this.props.setOnBreak();
        }
      }
    }
    timer();
    this.props.startInterval(setInterval(timer, 1000));
  }

  increaseBreakTimeFunction = () => {
    this.props.increaseBreakTime();
    if (this.props.myData.onBreak) {
      if (this.props.myData.paused) {
        this.props.setPaused();
      }
      this.props.breakCurrentTime();
    }
  }

  decreaseBreakTimeFunction = () => {
    if (this.props.myData.breakTime > 1) {
      this.props.decreaseBreakTime();
      if (this.props.myData.onBreak) {
        this.props.breakCurrentTime();
        if (this.props.myData.paused) {
          this.props.setPaused();
        }
      }
    }
  }

  increaseSessionTimeFunction = () => {
    this.props.increaseSessionTime();
    if (!this.props.myData.onBreak) {
      this.props.sessionCurrentTime();
      if (this.props.myData.paused) {
        this.props.setPaused();
      }
    }
  }

  decreaseSessionTimeFunction = () => {
    if (this.props.myData.sessionTime > 1) {
      this.props.decreaseSessionTime();
      if (!this.props.myData.onBreak) {
       this.props.sessionCurrentTime();
        if (this.props.myData.paused) {
          this.props.setPaused();
        }
      }
    }
  }

  handleKeyup = (e) => {
    if (e.keyCode === 13) {
      this.clockClick();
    }
    if (e.keyCode === 189) {
      if (this.props.myData.started) {
        if (this.props.myData.onBreak) {
          this.decreaseSessionTimeFunction();
        } else {
          this.decreaseBreakTimeFunction();
        }
      } else {
        if (this.props.myData.onBreak) {
          this.decreaseBreakTimeFunction();
        } else {
          this.decreaseSessionTimeFunction();
        }
      }
    }
  }

  handleKeypress = (e) => {
    if (e.keyCode === 43) {
      if (this.props.myData.started) {
        if (this.props.myData.onBreak) {
          this.increaseSessionTimeFunction();
        } else {
          this.increaseBreakTimeFunction();
        }
      } else {
        if (this.props.myData.onBreak) {
          this.increaseBreakTimeFunction();
        } else {
          this.increaseSessionTimeFunction();
        }
      }
    }
  }

  controlsClick = (e) => {
    if (!this.props.myData.started || !this.props.myData.onBreak) {
      if(e.target.classList.contains('break-increase')) {
        this.increaseBreakTimeFunction();
      }
      if(e.target.classList.contains('break-decrease')) {
        this.decreaseBreakTimeFunction();
      }
    }
    if (!this.props.myData.started || this.props.myData.onBreak) {
      if(e.target.classList.contains('session-increase')) {
        this.increaseSessionTimeFunction();
      }
      if(e.target.classList.contains('session-decrease')) {
        this.decreaseSessionTimeFunction();
      }
    }
  }

  clockClick = () => {
    let totalTime;
    if (!this.props.myData.started) {
      this.props.updateAnimation('countdown-data animated pulse');
      if (!this.props.myData.paused) {
        if (this.props.myData.onBreak) {
          totalTime = this.props.myData.breakTime;
        } else {
          totalTime = this.props.myData.sessionTime;
        }
        this.startTimer(totalTime);
        this.props.setStarted();
      } else {
        totalTime = this.props.myData.remaining / 60;
        this.startTimer(totalTime);
        this.props.setStarted();
        this.props.setPaused();
      }
    } else {
      clearInterval(this.props.myData.interval);
      this.props.setStarted();
      this.props.setPaused();
    }
  }

  resetFunction = () => {
    clearInterval(this.props.myData.interval);
    this.props.resetClock();
    document.getElementsByClassName('circle')[0].style.backgroundColor = '#0de30d';
    document.getElementsByClassName('circle')[0].style.border = '0.4rem solid green';
  }

  render() {
    return (
      <div className='container text-center'>
        <Title />
        <Controls
          breakTime={this.props.myData.breakTime}
          sessionTime={this.props.myData.sessionTime}
          controlsClick={this.controlsClick}
        />
        <Clock
          currentTime={this.props.myData.currentTime}
          status={this.props.myData.status}
          clockClick={this.clockClick}
          animated={this.props.myData.animated}
          handleKeyup={this.handleKeyup}
        />
        <Reset
          reset={this.resetFunction}
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
  updateTime,
  updateStatus,
  setOnBreak,
  updateAnimation,
  setStarted,
  setPaused,
  setRemaining,
  startInterval,
  sessionCurrentTime,
  breakCurrentTime,
  resetClock
})(App);