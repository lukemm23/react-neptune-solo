import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getCustomersSaga from './customers.saga';
import addCustomerSaga from './addCustomer.saga';
import addOrderSaga from './addOrder.saga';
import getOrderSaga from './getOrder.saga';
import editOrderSaga from './editOrder.saga';
import getAllNewSaga from './getAllNew.saga';
import postJunctionSaga from './postJunction.saga';
import getOrderTechSaga from './getOrderTech.saga';
import addTechSaga from './addTech.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getCustomersSaga(),
    addCustomerSaga(),
    addOrderSaga(),
    getOrderSaga(),
    editOrderSaga(),
    getAllNewSaga(),
    postJunctionSaga(),
    getOrderTechSaga(),
    addTechSaga(),
  ]);
}
