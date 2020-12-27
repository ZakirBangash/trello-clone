const reducer = (state, action) => {
    
        switch (action.type) {
          case "addUser": {
            console.log(action.type)
            // return [ ...state,action.payload]
              return state;
          }
          
          default:
            return state;
        }
      };
  
      export default reducer;
  