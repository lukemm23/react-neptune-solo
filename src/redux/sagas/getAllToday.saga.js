import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//GET all customers
function* getAllToday(action) {
    const id = action.payload
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/summary/'+id
        });
        yield put({
            type: 'SET_ALL_ORDERS_TODAY',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching all new orders: ', err);
    }
}

// ONLY FOR REGISTRATION
function* getAllTodaySaga() {
    yield takeLatest('GET_ALL_ORDERS_TODAY', getAllToday);
}


export default getAllTodaySaga;