import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE
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