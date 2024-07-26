import React from "react";
import "../Styles/Home.css";
import Slider from "./Slider";
import Mens from "../Images/mens.jpeg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <Slider />
      </div>

      <h2>Products</h2>
      <div className="products">
        <div className="product">
          <img src={Mens} alt="Mens Clothing" className="product-img" />
          <span>Mens Clothing</span>
          <button>Shopnow</button>
        </div>
        <div className="product">
          <img src={Mens} alt=" Mens Clothing" className="product-img" />
          <span>womens Clothing</span>
          <button>Shopnow</button>
        </div>
        <div className="product">
          <img src={Mens} alt=" of Mens Clothing" className="product-img" />
          <span>Mens Clothing</span>
          <button>Shopnow</button>
        </div>
        <div className="product">
          <img src={Mens} alt=" Mens Clothing" className="product-img" />
          <span>Mens Clothing</span>
          <button>Shopnow</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
