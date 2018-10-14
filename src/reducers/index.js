import { combineReducers } from 'redux';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  myData: mainReducer
});

export default rootReducer;