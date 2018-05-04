import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import golfProfile from './golferReducer';
import createdEvent from './eventReducer';
import myEvents from './myEventReducer';

const store = combineReducers({
  user,
  login,
  golfProfile,
  createdEvent,
  myEvents,
});

export default store;
