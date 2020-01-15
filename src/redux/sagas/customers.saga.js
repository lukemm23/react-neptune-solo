import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//GET all customers
function* getCustomers(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/customer'
        });
        yield put({
            type: 'SET_CUSTOMERS',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching customers: ', err);
    }
}

// ONLY FOR REGISTRATION
function* getCustomersSaga() {
    yield takeLatest('GET_CUSTOMERS', getCustomers);
}


export default getCustomersSaga;