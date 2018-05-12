import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import golfProfile from './golferReducer';
import createdEvent from './eventReducer';
import myEvents from './myEventReducer';
import attendingReducer from './attendingReducer';

const store = combineReducers({
  user,
  login,
  golfProfile,
  createdEvent,
  myEvents,
  attendingReducer,
});

export default store;
