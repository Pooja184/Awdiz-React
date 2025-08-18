import React from 'react'

const AccountDetails = ({handleChange}) => {
  return (
    <div>
        <h2>Account Info</h2>
      <label htmlFor="name">Username:</label><br/>
      <input type="text" name='name' onChange={handleChange}/><br />
      <label htmlFor="name">password:</label><br/>
      <input type="text" name='email' onChange={handleChange} /><br />
      <label htmlFor="name">Confirmpassword:</label><br/>
      <input type="text" name='mobile' onChange={handleChange}/>
    </div>
  )
}

export default AccountDetails
