import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const FakeStore = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data)
      setProducts(response.data);
      //    for(let i=0;i<response.data.length;i++){
      //     console.log(response.data[i])
      //     setProducts(response.data[i])
      //    }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // console.log(products, "p");
  };
  useEffect(() => {
    productData();
    // console.log(products)
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Products</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {products.map((product, idx) => (
              <div
                onClick={() => navigate(`/product/${product.id}`)}
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
      )}
    </div>
  );
};

export default FakeStore;
