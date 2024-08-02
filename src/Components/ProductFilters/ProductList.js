import React, { useContext } from "react";
import { productContext } from "../../App";
import { useNavigate } from "react-router-dom";
// import "../../Styles/ProductList.css";

const ProductList = ({ products }) => {
  const { setProductDetails } = useContext(productContext);
  const navigate = useNavigate

  const handleProduct = (item) => {
    setProductDetails(item);
    navigate("/product");
  };

  return (
    <div className="product-list-container">
      {products.length > 0 ? (
        products.map((item) => (
          <div
            key={item.id}
            className="product-list-card"
            onClick={() => handleProduct(item)}
          >
            <section className="product-list-image">
              <img src={item.images[0]} alt={item.title} className="product-list-img" />
            </section>
            <section className="product-list-details">
              <span className="product-list-type">{item.brand || item.category}</span>
              <span className="product-list-title">{item.title}</span>
              <span className="product-list-price">${item.price}</span>
            </section>
          </div>
        ))
      ) : (
        <p className="product-list-no-items">No products found</p>
      )}
    </div>
  );
};

export default ProductList;
