import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE,
  SET_CURRENT_TIME,
  UPDATE_TIME,
  UPDATE_STATUS,
  SET_ONBREAK,
  UPDATE_ANIMATION,
  SET_STARTED,
  SET_PAUSED,
  SET_REMAINING,
  START_INTERVAL,
  CURRENT_TIME_INCREASE,
  CURRENT_TIME_DECREASE
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

/*export const setCurrentTime = (time) => {
  return {
    type: SET_CURRENT_TIME,
    payload: time
  }
}*/

export const increaseCurrentTime = (data) => {
  return {
    type: CURRENT_TIME_INCREASE,
    payload: data
  }
}

export const decreaseCurrentTime = (data) => {
  return {
    type: CURRENT_TIME_DECREASE,
    payload: data
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