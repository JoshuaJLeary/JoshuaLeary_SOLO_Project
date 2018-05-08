import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';


function* joinEvent(){
    yield takeEvery('ATTEND_EVENT', attendEventSaga);
}

function* attendEventSaga(action) {
    console.log('attendEventSaga triggered:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        console.log('something');
        yield call(axios.post, '/api/user/attend', action.payload);
        console.log('action.payload:', action.payload);
        yield put({
            type: 'GET_EVENT'
        })
    }catch(error) {
        console.log('error in POST attendEventSaga:', error);
        alert('You are already attending this event!');

    }
}

export default joinEvent;