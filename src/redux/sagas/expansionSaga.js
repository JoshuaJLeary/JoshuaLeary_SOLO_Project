import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getGolfersAttending() {
    yield takeEvery('GET_ATTENDING', getAttendingGolfers)
}

function* getAttendingGolfers(action) {
    console.log('getAttendingGolfers triggered:', action);
    try{
        const attendingGolfers = yield call(axios.get, '/api/user/golfers');
        console.log(attendingGolfers);
        yield put({
            type: 'FETCH_ATTENDING',
            payload: attendingGolfers.data,
        }) 
    }catch(error) {
        console.log('error in getAttendingGolfers', error);
    }
}

export default getGolfersAttending;