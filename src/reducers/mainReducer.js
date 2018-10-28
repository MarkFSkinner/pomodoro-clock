import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE,
  SET_CURRENT_TIME
} from '../actions/types';

const initialState = {
  breakTime: 5,
  sessionTime: 25,
  currentTime: 25,
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
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: state.sessionTime
      }
    default:
      return state;
  }
}