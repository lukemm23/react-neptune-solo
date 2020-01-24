import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

//GET all customers
function* getOrderTech(action) {
    const id = action.payload
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/dispatch/'+id
        });
        yield put({
            type: 'SET_ORDER_BY_TECH',
            payload: response.data
        });
        console.log('response data',response.data);
        yield put({
            type: 'SET_ROUTE',
            payload: {
                origin: response.data[0].address,
                destination: response.data[1].address
            }
        });
    } catch (err) {
        console.log('error fetching order by tech: ', err);
    }
}


// ONLY FOR REGISTRATION
function* getOrderTechSaga() {
    yield takeLatest('GET_ORDER_BY_TECH', getOrderTech);
}

export default getOrderTechSaga;