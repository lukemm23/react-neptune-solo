import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//GET all customers
function* getAllNew(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/dispatch'
        });
        yield put({
            type: 'SET_ALL_NEW_ORDER',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching all new orders: ', err);
    }
}

// ONLY FOR REGISTRATION
function* getAllNewSaga() {
    yield takeLatest('GET_ALL_NEW_ORDER', getAllNew);
}


export default getAllNewSaga;