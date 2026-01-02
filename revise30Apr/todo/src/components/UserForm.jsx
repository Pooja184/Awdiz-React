import React, { useState } from "react";

const UserForm = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [allUsers,setAllUsers]=useState([])
  const handleChange = (e) => {
    setUsers({...users,[e.target.name]:e.target.value})
    console.log({...users,[e.target.name]:e.target.value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setAllUsers([...allUsers,users])
    console.log([...allUsers,users])
    setUsers({
       name: "",
    email: "",
    password: "",
    })
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="h-1/2 w-80 sm:w-1/3 bg-yellow-200 p-3">
        <h2 className="text-center font-bold text-yellow-600">Login</h2>
        <div className="flex flex-col justify-center pt-4 px-14 gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="outline-none"
            type="text"
            placeholder="Enter Your Name"
            id="name"
            value={users.name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            className="outline-none"
            type="email"
            placeholder="Enter Your Mail"
            id="email"
            value={users.email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="outline-none"
            type="password"
            placeholder="Enter Your password"
            id="password"
            name="password"
            value={users.password}
            onChange={handleChange}
          />
          {/* <input type="submit" value='Submit' className='bg-slate-400 mt-2 p-2 cursor-pointer' />
           */}
          <button type="submit" className="bg-slate-400 mt-2 p-2 cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
