import React, { useContext } from "react";
import { context } from "./UseContextCom";

const Theme = () => {
    const {state,dispatch}=useContext(context)
    console.log(state)
  return (
    <div style={{ color: state.color, backgroundColor: state.bgColor,height:"100vh",width:"100%",border:"2px solid yellow" }}>
      <button style={{padding:"10px",marginRight:"10px",fontWeight:"bold"}} onClick={()=>dispatch({type:"dark"})}>Dark mode</button>
      <button style={{padding:"10px",marginRight:"10px",fontWeight:"bold"}} onClick={()=>dispatch({type:"light"})}>Light mode</button>
    </div>
  );
};

export default Theme;
