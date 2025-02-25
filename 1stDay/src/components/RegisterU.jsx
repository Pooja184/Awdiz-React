import { useNavigate } from "react-router-dom"

function RegisterU(){
    const router=useNavigate();
    return(
        <>
        <h1>Register</h1>
        <button onClick={()=>router("/")}>Home</button>
        <button onClick={()=>router("/login")}>Login</button>
        </>
    )
}
export default RegisterU