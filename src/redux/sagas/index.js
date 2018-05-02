import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import mainSaga from './golfer.saga';
import createEventSaga from './createEventSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    mainSaga(),
    createEventSaga(),
    // watchIncrementAsync()
  ]);
}
