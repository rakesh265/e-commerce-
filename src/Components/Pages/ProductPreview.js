import React, { useContext } from "react";
import { productContext } from "../../App";
import "../../Styles/ProductPreview.css";

const ProductPreview = () => {
  const { productDetails } = useContext(productContext);

  return (
    <div className="product-preview">
      {productDetails ? (
        <div className="product-container">
          <div className="img">
            <img
              src={productDetails.images[1]}
              alt="Product"
              className="desktop-img"
            />
            <img
              src={productDetails.images[1]}
              alt="Product"
              className="mobile-img"
            />
          </div>
          <div className="details">
            <span className="type">{productDetails.category}</span>
            <span className="title">{productDetails.title}</span>
            <span className="description">{productDetails.description}</span>
            <div className="price">
              <span className="sale-price">${productDetails.price}</span>
            </div>
            <button className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p className="no-details">No product details available</p>
      )}
    </div>
  );
};

export default ProductPreview;
