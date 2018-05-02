import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* createEventSaga(){
    yield takeEvery('SET_EVENT', eventSaga)
}

function* eventSaga(action) {
    console.log('eventSaga triggered:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        yield call(axios.post, '/api/user/event', action.payload, config);


    }catch(error){
        console.log('error in POST eventSaga:', error);
    }
}

export default createEventSaga;