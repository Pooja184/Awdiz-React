import React from 'react'

const UserDetails = ({formData,handleChange}) => {
  return (
    <div>
        <h2>User Info</h2>
      <label htmlFor="name">Name:</label><br/>
      <input type="text" name='name' onChange={handleChange}/><br />
      <label htmlFor="name">Email:</label><br/>
      <input type="text" name='email' onChange={handleChange} /><br />
      <label htmlFor="name">Phn No:</label><br/>
      <input type="text" name='mobile' onChange={handleChange}/>
    </div>
  )
}

export default UserDetails
