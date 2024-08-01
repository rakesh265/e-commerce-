import React from "react";
import "../Styles/Product.css";

const ProductList = ({ products }) => (
  <div className="products">
    {products.length > 0 ? (
      products.map((item) => (
        <div key={item.id} className="product-container">
          <section className="img">
            <img
              src={item.images[0]}
              alt={item.title}
              className="mobile-img"
            />
          </section>
          <section className="details">
            <span className="type">{item.category}</span>
            <span className="title">{item.title}</span>
            <span className="price">
              <span className="sale-price">${item.price}</span>
              {item.discountPercentage && (
                <span className="actual-price">
                  ${item.price + (item.price * item.discountPercentage) / 100}
                </span>
              )}
            </span>
            <button>
              Add to Cart
            </button>
          </section>
        </div>
      ))
    ) : (
      <p>No products found</p>
    )}
  </div>
);

export default ProductList;
