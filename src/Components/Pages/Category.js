import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { searchContext, productContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { LIST_OF_CATEGORIES } from "./Constants";
import "../../Styles/Category.css";

const Category = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const { searchTerm, categoryGroup } = useContext(searchContext);
  const { setProductDetails } = useContext(productContext);
  const navigate = useNavigate();

  const handleProduct = (item) => {
    setProductDetails(item);
    navigate("/product");
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=0`);
      setData(res.data.products);
      console.log("API Response:", res.data.products);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return data.filter(
        (product) =>
          product.tags.some((tag) =>
            tag.toLowerCase().includes(lowerSearchTerm)
          ) || product.title.toLowerCase().includes(lowerSearchTerm)
      );
    } else if (categoryGroup) {
      return data.filter(
        (item) =>
          LIST_OF_CATEGORIES[categoryGroup]?.some(
            (subcategory) =>
              item.category.toLowerCase() === subcategory.toLowerCase()
          ) &&
          (selectedSubCategory
            ? item.category.toLowerCase() === selectedSubCategory.toLowerCase()
            : true)
      );
    } else {
      return data;
    }
  }, [data, searchTerm, categoryGroup, selectedSubCategory]);

  return (
    <div className="category-container">
      {loading ? (
        <p className="category-loading">Loading...</p>
      ) : error ? (
        <p className="category-error">{error}</p>
      ) : (
        <div className={ `${searchTerm ? 'product-container-main-1' : 'product-container-main'}`}>
          {!searchTerm && (
            <div className="subcategory-filter-container">
              <label>Choose a subcategory:</label>
              <br />
              <div className="subcategory-filter-radio-group">
                <label>
                  <input
                    type="radio"
                    name="subcategory"
                    value=""
                    checked={selectedSubCategory === ""}
                    onChange={() => setSelectedSubCategory("")}
                  />
                  All
                </label>
                {LIST_OF_CATEGORIES[categoryGroup]?.map((subCategory) => (
                  <label key={subCategory}>
                    <input
                      type="radio"
                      name="subcategory"
                      value={subCategory}
                      checked={selectedSubCategory === subCategory}
                      onChange={() => setSelectedSubCategory(subCategory)}
                    />
                    {subCategory}
                  </label>
                ))}
              </div>
            </div>
          )}
          <div className="product-list-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="product-list-card"
                  onClick={() => handleProduct(item)}
                >
                  <section className="product-list-image">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="product-list-img"
                    />
                  </section>
                  <section className="product-list-details">
                    <span className="product-list-type">
                      {item.brand || item.category}
                    </span>
                    <span className="product-list-title">{item.title}</span>
                    <span className="product-list-price">${item.price}</span>
                  </section>
                </div>
              ))
            ) : (
              <p className="product-list-no-items">No products found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
