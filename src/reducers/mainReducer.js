import {
  SET_DEFAULT,
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
} from '../actions/types';

const initialState = {
  breakTime: 5,
  sessionTime: 25,
  currentTime: 25,
  interval: undefined,
  remaining: undefined,
  started: false,
  paused: false,
  onBreak: false,
  audio: new Audio('http://cd.textfiles.com/sbsw/BEEPCHMS/MORSE.WAV'),
  start: Date.now(),
  status: 'SESSION',
  animated: 'countdown-data'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_DEFAULT:
      return {
        ...state,
        breakTime: 5,
        sessionTime: 25,
        currentTime: 25,
        started: false,
        paused: false,
        onBreak: false,
        status: 'SESSION',
        animated: 'countdown-data'
      }
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
    case CURRENT_TIME_SESSION:
      return {
        ...state,
        currentTime: state.sessionTime
      }
    case CURRENT_TIME_BREAK:
      return {
        ...state,
        currentTime: state.breakTime
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
    case UPDATE_ANIMATION:
      return {
        ...state,
        animated: action.payload
      }
    case SET_STARTED:
      return {
        ...state,
        started: !state.started
      }
    case SET_PAUSED:
      return {
        ...state,
        paused: !state.paused
      }
    case SET_REMAINING:
      return {
        ...state,
        remaining: action.payload
      }
    case START_INTERVAL:
      return {
        ...state,
        interval: action.payload
      }
    default:
      return state;
  }
}