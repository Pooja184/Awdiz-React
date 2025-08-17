import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {

  const [allData, setAllData] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log({[e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
       return alert("password not match")
    }
    setAllData([...allData, formData]);
    setFormData({
      username: "",
    password: "",
    confirmPassword: "",
    });
    console.log([...allData, formData]);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px", border:"2px solid white", padding:"20px" }}
      >
        <label htmlFor="username">
          username:{" "}
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            name="username"
            id="username"
          />
        </label>
        <label htmlFor="password">
          password:{" "}
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            id="password"
          />
        </label>
        <label htmlFor="confirmPassword">
          confirmPassword:{" "}
          <input
            onChange={handleChange}
            value={formData.confirmPassword}
            type="text"
            name="confirmPassword"
            id="confirmPassword"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AccountDetails;
