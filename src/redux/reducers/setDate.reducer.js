const setDateReducer = (state = {date:''}, action) => {
    switch (action.type) {
      case 'SET_DATE':
        return {
         date:action.payload 
        }
          
      default:
        return state;
    }
  };

  
  // user will be on the redux state at:
  // state.user
  export default setDateReducer;