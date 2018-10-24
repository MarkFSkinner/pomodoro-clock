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
    default:
      return state;
  }
}