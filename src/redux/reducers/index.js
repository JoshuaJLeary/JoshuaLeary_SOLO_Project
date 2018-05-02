import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import golfProfile from './golferReducer';

const store = combineReducers({
  user,
  login,
  golfProfile,
});

export default store;
