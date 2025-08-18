import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import AccountDetails from "./AccountDetails";

const Review = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  const nextBtn = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const backBtn = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const getCard = () => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            formData={formData}
            handleChange={handleChange}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <AccountDetails
            formData={formData}
            handleChange={handleChange}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <div>
            <h2>Review & Submit</h2>
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p><b>Mobile:</b> {formData.mobile}</p>
            <p><b>Username:</b> {formData.username}</p>
            <button
              onClick={() => {
                console.log("Final Submitted Data:", formData);
                alert(" Registration Successful!");
                localStorage.removeItem("formData"); // clear after submit
              }}
            >
              Submit
            </button>
          </div>
        );
      default:
        return <h1>Invalid Step</h1>;
    }
  };

  return (
    <div style={{ border: "2px solid white", padding: "20px", width: "400px" }}>
      <h3>Step {step}</h3>
      {getCard()}
      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button style={{ marginRight: "10px" }} onClick={backBtn}>
            Back
          </button>
        )}
        {step < 3 && <button onClick={nextBtn}>Next</button>}
      </div>
    </div>
  );
};

export default Review;
