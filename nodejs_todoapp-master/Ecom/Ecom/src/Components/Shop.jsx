import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addCart } from '../features/Cart2';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import "../index.css";

const Shop = () => {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/task/data1');
        const products = response.data.user.map(item => ({
          ...item,
          quantity: 1
        }));
        setData(products);
        console.log("shopdata:", products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const user = localStorage.getItem("name");

    if (user && user.length > 0) {
      const cartItem = { ...item, userName: user };
      dispatch(addCart(cartItem));
      toast.success("Item has been added to cart");
    } else {
      toast.error("Please Login First");
    }
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    padding: "30px",
    justifyContent: "center",
    background: "linear-gradient(to right, #f9f9f9, #eaeaea)",
    minHeight: "100vh",
  };

  const cardStyle = {
    height: "450px",
    width: "320px",
    backgroundColor: "black",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
    color: "white",
  };

  const imageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "auto",
    transition: "background-color 0.3s ease",
  };

  return (
    <div>
      <Toaster />
      
      {/* Filter Input */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "black",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "20px",
          width: "20%",
        }}
      >
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "10px",
            borderRadius: "4px",
            border: "3px solid #ccc",
            width: "100%",
          }}
        />
      </div>

      {/* Product Cards */}
      <div style={containerStyle}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={item.images[0]} alt={item.title} style={imageStyle} />
              <h3>{item.title}</h3>
              <p>Rs.{item.price}</p>
              <button
                style={buttonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "deeppink")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "black" }}>No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
