import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Useparams = () => {
    const [product,setProduct]=useState([1,3,5,2,7]);
    const router=useNavigate();


  return (
    <div>
      <h1>Search Product</h1>
      {product.map((produ)=>(
        <button onClick={()=>router(`/product/${produ}`)}>{produ}</button>
      ))}
    </div>
  )
}

export default Useparams
