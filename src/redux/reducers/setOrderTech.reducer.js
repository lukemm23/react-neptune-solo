const setOrderTechReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ORDER_BY_TECH':
        return [
         ...action.payload 
        ]
          
      default:
        return state;
    }
  };

  
  // user will be on the redux state at:
  // state.user
  export default setOrderTechReducer;