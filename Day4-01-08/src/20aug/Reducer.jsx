import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state,action) => {
    // console.log(state)
    // console.log(action,"action")
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: (state.count = 0) };
      default:
        return state;
    }
  };

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state,"state", dispatch,"dis")
  return (
    <div>
      <h1>Counter : {state.count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  );
};

export default Reducer;
