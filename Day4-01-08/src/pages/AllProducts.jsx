import React from 'react'

const AllProducts = () => {

    const productData=JSON.parse(localStorage.getItem("cart"))
    console.log(productData)
  return (
    <div>
        
          <h1>All Products</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
     {productData.map((product, idx) => (
              <div
                key={idx}
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.image}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <hr />
                <p style={{ fontSize: "18px", color: "black" }}>
                  <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                  {product.title}
                </p>
                <p style={{ fontSize: "18px", color: "black" }}>
                  <span style={{ fontWeight: "bold" }}>Price:</span>
                  {product.price}
                </p>
                <p style={{ fontSize: "18px", color: "black" }}>
                  <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                  {product.category}
                </p>
                </div>
            ))}
            </div>
    </div>
  )
}

export default AllProducts
