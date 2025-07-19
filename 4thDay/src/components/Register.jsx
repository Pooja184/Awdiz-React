import React, { useState } from 'react'

const Register = () => {
  const [allUsers,setAllUsers]=useState([])
  const [users , setUsers]= useState({
    name:"",
    email:"",
    pass:"",
    cPass:""
  })
  // console.log(users)

  const handleChange=(e)=>{
    e.preventDefault();
    // console.log(e.target.value,e.target.name)
    setUsers({...users,[e.target.name]: e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(
      users.name &&
      users.email &&
      users.pass &&
      users.cPass 
    ){
      if(users.pass === users.cPass){
        setAllUsers([...allUsers,users]);
        setUsers({
          name:"",
          email:"",
          pass:"",
          cPass:"",
        });
      }else{
        alert("Password not matched")
      }
    }else{
      alert("All fields are required");
    }


  }
  return (
    <>
    <form onSubmit={handleSubmit} className='w-96 mx-auto mt-8 p-4 bg-blue-300 rounded-md'>
      <h1 className='text-center text-2xl mb-4'>Register</h1>
    <label htmlFor="name" className=" ">User Name :</label><br/>
      <input 
      className='outline p-1 w-full '
      type='text'
      placeholder='Enter your name'
      name='name'
      id='name'
      onChange={handleChange}
      value={users.name}
      />
      <br/><br/>
      <label htmlFor="email">Email :</label><br/>
      <input 
      className='outline p-1 w-full'
      type='text'
      placeholder='Enter your email'
      name='email'
      id='email'
      onChange={handleChange}
      value={users.email}
      
      />
      <br/><br/>
      <label htmlFor="password">Password :</label><br/>
      <input 
      className='outline p-1 w-full'
      type='text'
      placeholder='Enter your password'
      name='pass'
      id='password'
      onChange={handleChange}
      value={users.pass}

      />
      <br/>
      <br/>
      <label htmlFor="cPassword" className='mb-8'>Confirm Password :</label><br/>
      <input 
      className='outline p-1 w-full'
      type='text'
      placeholder='Enter your Confirm Password'
      name='cPass'
      id='cPassword'
      onChange={handleChange}
      value={users.cPass}

      />
      <br/>
      <br/>
      <input
      type='submit'
      className='bg-blue-500 text-white p-2 rounded-md mb-4'
      />
    </form>
    <div>
      {
        allUsers.map((user,idx)=>(
          <ul key={idx} className='bg-blue-100 w-96 mx-auto mt-4 p-2 rounded-md'>
            <li>Name : {user.name}</li>
            <li>Email : {user.email}</li>
            <li>Password : {user.pass}</li>
          </ul>
        ))
        
       
      }
    </div>
    </>
  )
}

export default Register
