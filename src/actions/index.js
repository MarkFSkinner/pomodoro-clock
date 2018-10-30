import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE,
  SET_CURRENT_TIME,
  UPDATE_TIME,
  UPDATE_STATUS,
  SET_ONBREAK,
  UPDATE_ANIMATION
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

export const setCurrentTime = () => {
  return {
    type: SET_CURRENT_TIME
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

