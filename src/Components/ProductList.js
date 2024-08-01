import React, { useContext } from "react";
import { cartContext } from "../App";
import "../Styles/Product.css";

const ProductList = ({ products }) => {
  const { CartItems, setCartItems } = useContext(cartContext);

  const handleAddToCart = (product) => {
    // Add product to cart
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return [...prevItems]
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
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
              <button onClick={() => handleAddToCart(item)}>
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
};

export default ProductList;
