import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//POST new customer
function* addCustomer(action) {
    try {
        yield axios.post('/api/customer', action.payload);
        yield put({ type: 'GET_CUSTOMERS' });
    } catch (err) {
        console.log('error adding customers: ', err);
    }
}

// ONLY FOR REGISTRATION
function* addCustomerSaga() {
    yield takeLatest('ADD_CUSTOMER', addCustomer);
}


export default addCustomerSaga;