import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//POST new customer
function* addOrder(action) {
    try {
        const response = yield axios.post('/api/order/onlyID', action.payload);
        yield put({ 
            type: 'GET_ORDER',
            payload: response.data
        });
    } catch (err) {
        console.log('error adding order: ', err);
    }
}

// ONLY FOR REGISTRATION
function* addOrderSaga() {
    yield takeLatest('ADD_ORDER', addOrder);
}

export default addOrderSaga;