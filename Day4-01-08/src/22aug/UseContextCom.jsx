import React, { createContext, useReducer } from "react";

export const context = createContext();
const UseContextCom = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "dark":
        return {
          ...state,
          color:"white",
          bgColor:"black"
        };
      case "light":
        return {
           ...state,
          color:"black",
          bgColor:"grey"
        };

      default:
        return state;
    }
  }
  const initialState = { color: null, bgColor: null };
  const [state,dispatch]=useReducer(reducer,initialState)
  console.log(state)
  return (
    <div>
      <context.Provider value={{state,dispatch}}>{children}</context.Provider>
    </div>
  );
};

export default UseContextCom;
