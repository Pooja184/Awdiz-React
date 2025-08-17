import React, { useState } from 'react'
import UserDetails from './UserDetails';
import AccountDetails from './AccountDetails';

const Review = () => {
    const [step,setStep]=useState(1);
      const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        username: "",
        password: "",
        confirmPassword: "",
      });
      const getCard=()=>{
        switch(step){
            case 1:     
                return <UserDetails formData={formData} setFormData={setFormData} setStep={setStep} handleChange={handleChange}/>
            case 2:
                return <AccountDetails formData={formData} setFormData={setFormData} setStep={setStep}/>
            default:
                return <h1>Invalid Step</h1>
        }    
      } 

      const handleChange=(e)=>{
        console.log({...formData,[e.target.name]:e.target.value})
        setFormData({...formData,[e.target.name]:e.target.value})
      }

      const nextBtn=()=>{
        setStep((prev)=>prev+1)
      }
  return (
    <div style={{border:"2px solid white", padding:"20px"}}>
       {getCard()}
       <button style={{margin:"10px"}}>Back</button>
       <button onClick={nextBtn}>Next</button>
    </div>
  )
}

export default Review
