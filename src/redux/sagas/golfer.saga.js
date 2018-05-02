import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* mainSaga(){
    yield takeEvery('GET_GOLFER', getSaga)
}

function* getSaga(action) {
    console.log('getSaga triggered:', action);
    try {
      const golferResponse = yield call(axios.get, '/api/user/profile');
      console.log(golferResponse);
      yield put({
        type: 'SET_GOLFER',
        payload: golferResponse.data,
      })
    } catch (error) {
      console.log('Error in getSaga:', error);
    }
  }

export default mainSaga;