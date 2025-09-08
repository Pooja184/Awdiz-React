import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstValue,
  setSecondValue,
  setOperator,
  calculate,
  clear
} from "./features/calculator";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.calculator);

  const handleNumberClick = (num) => {
    if (currentValue === "0") {
      setCurrentValue(num); 
    } else {
      setCurrentValue(currentValue + num);
    }
  };

  const handleOperatorClick = (op) => {
    dispatch(setFirstValue(currentValue)); 
    dispatch(setOperator(op));
    setCurrentValue("0"); 
  };

  
  const handleEqualClick = () => {
    dispatch(setSecondValue(currentValue)); 
    dispatch(calculate());
    setCurrentValue("0"); 
  };


  // const handleClear = () => {
  //   setCurrentValue("0");
  //   dispatch(setFirstValue(""));
  //   dispatch(setSecondValue(""));
  //   dispatch(setOperator(""));
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <div style={{ width: "250px", border: "2px solid black", padding: "10px" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            textAlign: "right",
            marginBottom: "10px",
          }}
        >
          {currentValue}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              style={{ padding: "10px" }}
              onClick={() => handleNumberClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button style={{ padding: "10px" }} onClick={() => handleOperatorClick("/")}>/</button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              style={{ padding: "10px" }}
              onClick={() => handleNumberClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button style={{ padding: "10px" }} onClick={() => handleOperatorClick("*")}>*</button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              style={{ padding: "10px" }}
              onClick={() => handleNumberClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button style={{ padding: "10px" }} onClick={() => handleOperatorClick("-")}>-</button>

          <button
            style={{ padding: "10px" }}
            onClick={() => handleNumberClick("0")}
          >
            0
          </button>
          <button style={{ padding: "10px" }} onClick={()=>dispatch(clear())}>C</button>
          <button style={{ padding: "10px" }} onClick={() => handleOperatorClick("+")}>+</button>
          <button style={{ padding: "10px" }} onClick={handleEqualClick}>=</button>
        </div>

        <h3 style={{ marginTop: "15px" }}>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
