import React from 'react'

const Navbar = () => {
  return (
    <div style={{height:"100px",width:"100%", backgroundColor:"red",margin:"0px",padding:"0px"}}>
      <div style={{width:"100%", height:"50px", backgroundColor:"yellow",display:'flex',justifyContent:'space-around'}}>
        <div style={{border:"2px solid black",width:"40%"}}>PPY technologies</div>
        <div style={{width:"40%",display:'flex',justifyContent:'space-evenly',border:"2px solid black"}}>
            <p>Home</p>
            <p>Contact</p>
            <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
