import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UseState = () => {
    const [counter,setCounter]=useState(0);
    const router=useNavigate();

    const increaseCount=()=>{
        setCounter((prev)=>prev+1)
    }

    useEffect(()=>{
        console.log("inside useEffect");
    },[])
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={()=>router("/useparams")}>Go to Product Page</button>
    </div>
  )
}

export default UseState
