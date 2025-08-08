import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [addToCart, setAddToCart] = useState([]);
  const navigate=useNavigate()
  const singleProductFunction = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      //   console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCartFunction = () => {
    //   console.log(product,"product....")

    setAddToCart((prev) => [...prev, product]);
    let updatedCart = [...addToCart, product];
    // console.log("cart",addToCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    singleProductFunction();
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setAddToCart(savedCart);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <div>
            <button
              onClick={() => addToCartFunction()}
              style={{ marginBottom: "50px", border: "2px solid white" }}
            >
              Add to cart
            </button>
            <button onClick={()=>navigate('/allproducts')} style={{marginLeft: "50px",  border: "2px solid white"}} >View All Products</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              border: "2px solid white",
              backgroundColor: "white",
            }}
          >
            <div style={{ width: "45%", borderRight: "2px solid gray" }}>
              <img
                style={{ width: "200px", height: "300px" }}
                src={product.image}
                alt=""
              />
            </div>
            <div style={{ width: "45%", color: "black" }}>
              <h2>Name: {product.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
