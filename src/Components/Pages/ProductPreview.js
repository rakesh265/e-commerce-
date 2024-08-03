import React, { useContext } from "react";
import { productContext } from "../../App";
import "../../Styles/ProductPreview.css";

const ProductPreview = () => {
  const { productDetails } = useContext(productContext);

  return (
    <div className="product-preview-container">
      {productDetails ? (
        <main className="product-preview-main">
          <section className="product-preview-image">
            <img
              src={productDetails.images[1]}
              alt="Product"
              className="product-preview-img"
            />
          </section>
          <section className="product-preview-details">
            <span className="product-preview-type">{productDetails.category}</span>
            <span className="product-preview-title">{productDetails.title}</span>
            <span className="product-preview-description">{productDetails.description}</span>
            <span className="product-preview-price">
              <span className="product-preview-sale-price">${productDetails.price}</span>
            </span>
            <button className="product-preview-add-to-cart-btn">
              Add to Cart
            </button>
          </section>
        </main>
      ) : (
        <p className="product-preview-no-details">No product details available</p>
      )}
    </div>
  );
};

export default ProductPreview;
