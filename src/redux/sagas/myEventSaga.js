import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* myEventSaga() {
    yield takeEvery('GET_MY_EVENTS', getMyEventSaga)
}

function* getMyEventSaga(action) {
    console.log('getMyEventSaga triggered:', action);
    try{
        const myEventResponse = yield call(axios.get, '/api/user/myEvent');
        console.log('events', myEventResponse);
        yield put({
            type: 'FETCH_MY_EVENTS',
            payload: myEventResponse.data,
        })
    }catch(error){
        console.log('error in getMyEvents saga', error);
    }
}

export default myEventSaga;