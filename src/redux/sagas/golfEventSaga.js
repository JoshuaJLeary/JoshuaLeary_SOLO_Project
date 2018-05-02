import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* eventSaga() {
    yield takeEvery('GET_EVENT', getEventSaga)
}

function* getEventSaga() {
    console.log('getEventSaga triggered:', action);
    try{
        const eventResponse = yield call(axios.get, '/api/user/events');
        console.log(eventResponse);
        yield put({
            type: 'SET_EVENT',
            payload: eventResponse.data,
        })
    }catch(error){
        console.log('error in getEventSaga:', error);
    }
}

export default eventSaga;