import { combineReducers } from 'redux';
import errors from './errors.reducer';
import loginMode from './loginMode.reducer';
import user from './user.reducer';
import customers from './customers.reducer';
import selected from './selCustomer.reducer';
import setOrder from './setOrder.reducer';
import setAllNew from './setAllNew.reducer';
import setOrderTech from './setOrderTech.reducer';
import setDate from './setDate.reducer';
import setAllToday from './setAllToday.reducer';
import setRoute from './setRoute.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  customers,
  selected,
  setOrder,
  setAllNew,
  setOrderTech,
  setDate,
  setAllToday,
  setRoute,
});

export default rootReducer;
