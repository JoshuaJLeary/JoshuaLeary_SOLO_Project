import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import mainSaga from './golfer.saga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    mainSaga(),
    // watchIncrementAsync()
  ]);
}
