import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE
} from '../actions/types';

const initialState = {
  breakTime: 5,
  sessionTime: 25,
  totalTime: undefined,
  interval: undefined,
  remaining: undefined,
  clicked: false,
  paused: false,
  onBreak: false,
  audio: new Audio('http://cd.textfiles.com/sbsw/BEEPCHMS/MORSE.WAV'),
  start: Date.now(),
  hours: undefined,
  minutes: undefined,
  seconds: undefined
};

export default function(state = initialState, action) {
  switch(action.type) {
    case BREAK_INCREASE:
      return {
        ...state,
        breakTime: state.breakTime + 1
      }
    case BREAK_DECREASE:
      return {
        ...state,
        breakTime: state.breakTime - 1
      }
    case SESSION_INCREASE:
      return {
        ...state,
        sessionTime: state.sessionTime + 1
      }
    case SESSION_DECREASE:
      return {
        ...state,
        sessionTime: state.sessionTime - 1
      }
    default:
      return state;
  }
}