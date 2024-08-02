import React from "react";
import Slider from "../Features/Slider";
import Mens from "../../Assets/Images/mens.jpeg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <Slider />
      </div>

      <h2 className="home-products-heading">Products</h2>
      <div className="home-products">
        <div className="home-product">
          <img src={Mens} alt="Mens Clothing" className="home-product-img" />
          <span className="home-product-title">Mens Clothing</span>
          <button className="home-product-btn">Shopnow</button>
        </div>
        <div className="home-product">
          <img src={Mens} alt="Womens Clothing" className="home-product-img" />
          <span className="home-product-title">Womens Clothing</span>
          <button className="home-product-btn">Shopnow</button>
        </div>
        <div className="home-product">
          <img src={Mens} alt="Mens Clothing" className="home-product-img" />
          <span className="home-product-title">Mens Clothing</span>
          <button className="home-product-btn">Shopnow</button>
        </div>
        <div className="home-product">
          <img src={Mens} alt="Mens Clothing" className="home-product-img" />
          <span className="home-product-title">Mens Clothing</span>
          <button className="home-product-btn">Shopnow</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
