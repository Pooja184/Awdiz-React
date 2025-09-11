import React, { useState } from 'react'

const Login = () => {
  const [userInfo,setUserInfo]=useState({
    
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
    const userData=JSON.parse(localStorage.getItem("users"))
    let isValid=false;
    for(let user of userData){
        if(user.username == userInfo.username && user.password ==userInfo.password){
            isValid=true;
            break;
        }
    }
     if (isValid) {
        alert("You've successfully login")
    setUserInfo({username:"",password:""})

    }else{
        alert("Please check your credentials")
    }
    // console.log(userData)
  }
  return (
    <div className='flex justify-center items-center  '>
      <div className=' border-4 border-black p-10 bg-red-400 '>
       
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

export default Login
