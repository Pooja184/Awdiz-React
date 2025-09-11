import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  const [userInfo,setUserInfo]=useState({
    name:"",
    username:"",
    password:""
  })
  const [formData,setFormData]=useState([])
  const handleChange=(e)=>{
    // console.log({[e.target.name]:e.target.value})
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
    // console.log(userInfo)
  }

  const handleSubmit=()=>{
    // console.log(userInfo)
    setFormData([...formData,userInfo])
    // console.log([...formData,userInfo])
    let userData=[...formData,userInfo];
    console.log(userData)
    localStorage.setItem("users",JSON.stringify(userData))
    setUserInfo({
        name:"",
    username:"",
    password:""
    })
    navigate('/login')
    // console.log(userInfo)
  }
  return (
    <div className='flex justify-center items-center  '>
      <div className=' border-4 border-black p-10 bg-red-400 '>
        <div className='text-left mt-2'>
          <label htmlFor="name">Name</label><br />
        <input onChange={handleChange} className='outline-none ' type="text" name="name" value={userInfo.name} id="name" /><br />
        </div>
        <div className='text-left mt-2'>
          <label htmlFor="Username">Username</label><br />
        <input onChange={handleChange} className='outline-none' type="text" name="username" value={userInfo.username} id="Username" /><br />
        </div>
        <div className='text-left mt-2'>
            <label htmlFor="password">Password</label><br />
        <input onChange={handleChange} className='outline-none' type="text" name="password" value={userInfo.password} id="password" /><br />
        </div>
       <button onClick={handleSubmit} className='bg-green-700 px-4 py-2 mt-2'>Submit</button>
      </div>
    </div>
  )
}

export default Register
