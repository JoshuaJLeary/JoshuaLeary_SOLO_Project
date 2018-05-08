import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateSaga(){
    yield takeEvery('UPDATE_PROFILE', updateMyProfileSaga);
}

function* updateMyProfileSaga(action){
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
      try{
          yield call(axios.put, '/api/user/updateProfile', action.payload, config)
          yield put({
              type: 'GET_GOLFER',
          })
      }
      catch(error){
          console.log('error in updateMyProfileSaga', error);
      }
}

export default updateSaga;