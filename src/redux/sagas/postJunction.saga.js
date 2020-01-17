import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//POST new customer
function* postJunction(action) {
    try {
        const response = yield axios.post('/api/order', action.payload);
        yield put({ 
            type: 'GET_ALL_NEW_ORDER',
            payload: response.data
        });
    } catch (err) {
        console.log('error adding to junction: ', err);
    }
}

// ONLY FOR REGISTRATION
function* postJunctionSaga() {
    yield takeLatest('POST_TO_JUNCTION', postJunction);
}


export default postJunctionSaga;