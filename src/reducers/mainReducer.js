import {
  BREAK_INCREASE,
  BREAK_DECREASE,
  SESSION_INCREASE,
  SESSION_DECREASE,
  SET_CURRENT_TIME,
  UPDATE_TIME,
  UPDATE_STATUS,
  SET_ONBREAK
} from '../actions/types';

const initialState = {
  breakTime: 0.25,
  sessionTime: 0.125,
  currentTime: 0.125,
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
  seconds: undefined,
  status: 'SESSION'
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
    case UPDATE_TIME:
      return {
        ...state,
        currentTime: action.payload
      }
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case SET_ONBREAK:
      return {
        ...state,
        onBreak: !state.onBreak
      }
    default:
      return state;
  }
}