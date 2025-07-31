import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const decreaseCount = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const resetCount = () => {
    setCounter(0);
  };

//   useEffect(()=>{
//     console.log("inside useEffect log")
//   })

// useEffect(()=>{
//     console.log("inside useEffect log")
//   },[])

// useEffect(()=>{
//     console.log("inside useEffect log")
//   },[counter])

useEffect(()=>{
    console.log("inside useEffect log")
  },[counter,counter1])
  return (
    <div>
        <h1>UseEffect </h1>
      <h2>Counter : {counter}</h2>
      <h2>Counter2: {counter1}</h2>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increase +
      </button>
      <button style={{ marginRight: "20px" }} onClick={decreaseCount}>
        Decrease -
      </button>
      <button onClick={resetCount}>Reset </button>
      <br />
      <br />
      {/* Counter2 */}
      <button
        style={{ marginRight: "20px" }}
        onClick={() => setCounter1((prev) => prev + 1)}
      >
        Increase2 +
      </button>
      <button style={{ marginRight: "20px" }} onClick={() => setCounter1((prev) => prev - 1)}>
        Decrease2 -
      </button>
      <button onClick={() => setCounter1(0)}>Reset2 </button>
    </div>
  );
};

export default UseEffect;
