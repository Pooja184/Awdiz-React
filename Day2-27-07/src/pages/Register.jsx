import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);

  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log({[e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "email is required";
    if (!formData.password) errors.password = "password is required";
    if (!formData.confirmPassword)
      errors.confirmPassword = "confirmPassword is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Password do not match";
    setFormErrors(errors);
      if (Object.keys(errors).length > 0) return;
    setUsers([...users, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    console.log([...users, formData]);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{border:"2px solid white", width:"100%", padding:"20px"}}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}

        <br />
        <br />

        <label htmlFor="confirmPassword">ConfirmPassword</label>
        <br />
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        {formErrors.confirmPassword && <p style={{ color: "red" }}>{formErrors.confirmPassword}</p>}

        <br />
        <input type="submit" />
      </form>
      {
        users.map((user,idx)=>(
          <div key={idx}>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Password : {user.password}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default Register;
