import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import golfProfile from './golferReducer';
import createdEvent from './eventReducer';

const store = combineReducers({
  user,
  login,
  golfProfile,
  createdEvent,
});

export default store;
