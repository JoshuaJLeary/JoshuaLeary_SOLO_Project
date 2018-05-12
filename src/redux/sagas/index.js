import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import mainSaga from './golfer.saga';
import createEventSaga from './createEventSaga';
import eventSaga from './golfEventSaga';
import myEventSaga from './myEventSaga';
import attendEventSaga from './attendEventSaga';
import joinEvent from './attendEventSaga';
import updateSaga from './updateMyProfileSaga';
import leaveEventSaga from './leaveEventSaga';
import cancelEventSaga from './cancelEventSaga';
import getGolfersAttending from './expansionSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    mainSaga(),
    createEventSaga(),
    eventSaga(),
    myEventSaga(),
    joinEvent(),
    updateSaga(),
    leaveEventSaga(),
    cancelEventSaga(),
    getGolfersAttending(),
    // watchIncrementAsync()
  ]);
}
