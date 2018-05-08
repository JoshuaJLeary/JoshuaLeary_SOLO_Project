import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* leaveEventSaga() {
    yield takeEvery('LEAVE_EVENT', leaveEvent)
}

function* leaveEvent(action) {
    console.log('leaveEvent triggered:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }  
    try{
        yield call(axios.delete, `/api/user/${action.payload.id}`, config);
        yield put({
            type: 'GET_MY_EVENTS',
        })
    }catch(error){
        console.log('error in DELETE leaveEvent:', error);
    }
}

export default leaveEventSaga;