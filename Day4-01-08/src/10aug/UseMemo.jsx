import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter,setCounter]=useState(1);

    const increment=()=>{
        console.log("inside increment")
        setCounter(prev=>prev+1)
    }
    
    const result=useMemo(()=>heavyCalculation(counter),[counter])
    
  return (
    <div>
     <h2>Counter:{counter}</h2> 
     <button onClick={increment}>Increment</button>
     <h2>Heavy calculation:{result}</h2>
    </div>
  )
}

const heavyCalculation=(counter)=>{
   
    for(let i=0;i<10000000000;i++){
       counter+=10
    }
    return counter
}

export default UseMemo
