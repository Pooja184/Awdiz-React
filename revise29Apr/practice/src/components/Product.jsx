import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {uniqueid} = useParams();
  return (
    <div>
      <h1>Product :{uniqueid}</h1>
    </div>
  )
}

export default Product
