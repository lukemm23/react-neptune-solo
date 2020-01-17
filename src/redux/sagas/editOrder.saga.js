import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//axio PUT to update title and description on edit page
function* editOrder(action) {
    const id = action.payload.id
    try {
         yield axios({
            method: 'PUT',
            url: '/api/order/'+id,
            data: action.payload
        });
        yield put ({
            type: 'GET_ALL_NEW_ORDER'
        })
       
    } catch (err) {
        console.log('error editing orders: ', err);
    }
}


// ONLY FOR REGISTRATION
function* editOrderSaga() {
    yield takeLatest('EDIT_ORDER', editOrder);
}

export default editOrderSaga;