import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../23aug/features/calculator";

import axios from 'axios'
const Login = () => {
    const { user } = useSelector((state) => state.calculator);

  console.log("selected user:", user)
  const dispatch=useDispatch()
  const [userInfo,setUserInfo]=useState({
    
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    // console.log({[e.target.name]:e.target.value})
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
    // console.log(userInfo)
  }

  const handleSubmit=async()=>{
   try {
     if ( !userInfo.email || !userInfo.password) {
       alert("Please fill in all required fields");
       return;
     }
     
       const response = await axios.post("http://localhost:8000/api/v1/auth/Login", 
         userInfo,
       );
       console.log("login response:", response.data);
       // dispatch the user into redux using the action creator
       // response.data may contain the user object or a message/token depending on your backend
       dispatch(userLogin(response.data));
       console.log("dispatched user to store");
       if (response.data) {
         alert("login successful!");
       }
     setUserInfo({
       
       email: "",
       password: ""
     })
   } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(error.response.data.message || "Registration failed. Please try again.");
          console.log("Error data:", error.response.data);
        } 
   }
  }
  return (
  <div>
      <h1>Hello, {user ? user.user.name :"..."}</h1>

      <div className='flex justify-center items-center  '>
      <div className=' border-4 border-black p-10 bg-red-400 '>
       
       
        <div className='text-left mt-2'>
          <label htmlFor="Username">email</label><br />
        <input onChange={handleChange} className='outline-none' type="email" name="email" value={userInfo.email} id="email" /><br />
        </div>
        <div className='text-left mt-2'>
            <label htmlFor="password">Password</label><br />
        <input onChange={handleChange} className='outline-none' type="text" name="password" value={userInfo.password} id="password" /><br />
        </div>
       <button onClick={handleSubmit} className='bg-green-700 px-4 py-2 mt-2'>Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Login
