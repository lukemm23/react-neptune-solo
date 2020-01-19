import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//axio PUT to update title and description on edit page
function* addTech(action) {
    const id = action.payload.id
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/dispatch/'+id,
            data: action.payload
        });
        yield put ({
            type: 'GET_ORDER_BY_TECH',
            payload: response.data.id
        })
       
    } catch (err) {
        console.log('error adding tech: ', err);
    }
}


// ONLY FOR REGISTRATION
function* addTechSaga() {
    yield takeLatest('ADD_TECH', addTech);
}


export default addTechSaga;