import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decreaseCount = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const resetCount = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1>Counter : {counter}</h1>
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
    </div>
  );
};

export default Counter;
