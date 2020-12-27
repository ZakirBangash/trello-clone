import React, {
    createContext,
    useReducer,
    useState
} from "react";

import reducer from './reducer'

  const GlobalContext = createContext(); 

  export default GlobalContext; // export it for using inside useContext

  const initialCards = [
    {
        title: "React Testing",
      },
    {
      title: "Front End Planned",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },
    
    {
      title: "Front end in progress",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front End completed",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front End commited to github",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },
   
  ];

  export const GlobalProvider = ({ children }) => {
      let [state, dispatch] = useReducer(reducer,initialCards);
      



      function addUser(user)  {
          console.log(user)
         dispatch({
         type: "addUser",
         payload:{
           title:user
         }
       })
    };
    

  
    return (
      <GlobalContext.Provider
        value={{
          cards:state,
          addUser : addUser
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  

