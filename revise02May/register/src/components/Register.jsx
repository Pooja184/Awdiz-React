import React, { useState } from "react";

const Register = () => {
  const [users, setUsers] = useState({
    name:"",
    email:"",
    password:"",
    confirmPass:""
  });

  const [allUsers,setAllUsers]=useState([]);

  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name);
    // console.log(allUsers)
    setUsers({...users,[e.target.name]:e.target.value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("submit")
    // console.log(allUsers)
    setAllUsers([...allUsers,users])
    setUsers({
      name:"",
      email:"",
      password:"",
      confirmPass:""
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register form</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={users.name} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={users.email} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" value={users.password} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="cPass">Confirm Password: </label>
        <input type="password" id="cPass" name="confirmPass" value={users.confirmPass} onChange={handleChange} />
        <br />
        <br />
        <input type="submit" />
      </form>
      {
        allUsers.map((user,idx)=>
          <div key={idx}>
          <h2>{idx+1}. {user.name}</h2>
          <h2>{idx+2}. {user.email}</h2>
          <h2>{idx+3}. {user.password}</h2>
          <h2>{idx+4}. {user.confirmPass}</h2>
          </div>
        )
      }
    </div>
  );
};

export default Register;
