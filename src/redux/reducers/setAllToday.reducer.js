const setAllTodayReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALL_ORDERS_TODAY':
        return [
         ...action.payload,
        ]
          
      default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default setAllTodayReducer;