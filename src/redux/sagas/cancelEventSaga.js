import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* cancelEventSaga() {
    yield takeEvery('CANCEL_EVENT', cancelEvent)
}

function* cancelEvent(action) {
    console.log('cancelEvent triggered:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        yield call(axios.delete, `/api/user/cancel/${action.payload.id}`, config);
        yield put({
            type: 'GET_EVENT',
        })
    } catch(error) {
        console.log('error in DELETE cancelEvent', error);
    } 
}

export default cancelEventSaga;