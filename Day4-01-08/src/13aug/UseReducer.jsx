import React, { useReducer } from 'react'
import { counterReducer,initialState } from './Reducer'
const UseReducer = () => {
    const [state,dispath]=useReducer(counterReducer,initialState);
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={()=>dispath({type:'increment'})}>Increment</button>
      <button onClick={()=>dispath({type:'decrement'})}>Decrement</button>
      <button onClick={()=>dispath({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducer
