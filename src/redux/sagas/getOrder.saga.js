import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//GET all customers
function* getOrder(action) {
    const id = action.payload.id
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/order/'+id
        });
        yield put({
            type: 'SET_ORDER',
            payload: response.data[0]
        });
    } catch (err) {
        console.log('error fetching order: ', err);
    }
}


// ONLY FOR REGISTRATION
function* getOrderSaga() {
    yield takeLatest('GET_ORDER', getOrder);
}


export default getOrderSaga;