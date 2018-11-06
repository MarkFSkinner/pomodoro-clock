import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE,
  UPDATE_TIME,
  UPDATE_STATUS,
  SET_ONBREAK,
  UPDATE_ANIMATION,
  SET_STARTED,
  SET_PAUSED,
  SET_REMAINING,
  START_INTERVAL,
  CURRENT_TIME_SESSION,
  CURRENT_TIME_BREAK
} from './types';

export const increaseBreakTime = () => {
  return {
    type: BREAK_INCREASE
  }
}

export const decreaseBreakTime = () => {
  return {
    type: BREAK_DECREASE
  }
}

export const increaseSessionTime = () => {
  return {
    type: SESSION_INCREASE
  }
}

export const decreaseSessionTime = () => {
  return {
    type: SESSION_DECREASE
  }
}

export const sessionCurrentTime = () => {
  return {
    type: CURRENT_TIME_SESSION
  }
}

export const breakCurrentTime = () => {
  return {
    type: CURRENT_TIME_BREAK
  }
}

export const updateTime = (time) => {
  return {
    type: UPDATE_TIME,
    payload: time
  }
}

export const updateStatus = (status) => {
  return {
    type: UPDATE_STATUS,
    payload: status
  }
}

export const setOnBreak = () => {
  return {
    type: SET_ONBREAK,
  }
}

export const updateAnimation = (data) => {
  return {
    type: UPDATE_ANIMATION,
    payload: data
  }
}

export const setStarted = () => {
  return {
    type: SET_STARTED,
  }
}

export const setPaused = () => {
  return {
    type: SET_PAUSED,
  }
}

export const setRemaining = (data) => {
  return {
    type: SET_REMAINING,
    payload: data
  }
}

export const startInterval = (data) => {
  return {
    type: START_INTERVAL,
    payload: data
  }
}