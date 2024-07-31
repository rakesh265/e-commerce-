import axios from "axios";
import React, { useState, useEffect, useContext, useMemo } from "react";
import { searchContext } from "../App";
import "../Styles/Product.css";

const Category = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const { searchTerm, categoryGroup } = useContext(searchContext);

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

  const listOfCategories = {
    "Fashion & Accessories": [
      "beauty",
      "fragrances",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "sunglasses",
      "tops",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
      "skin-care",
    ],
    "Electronics & Gadgets": [
      "laptops",
      "mobile-accessories",
      "smartphones",
      "tablets",
    ],
    "Home & Living": [
      "furniture",
      "groceries",
      "home-decoration",
      "kitchen-accessories",
    ],
    "Sports & Vehicles": ["motorcycle", "sports-accessories", "vehicle"],
  };

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
      return data.filter((item) =>
        listOfCategories[categoryGroup]?.some(
          (subcategory) => item.category.toLowerCase() === subcategory.toLowerCase()
        )
      );
    } else if (selectedSubCategory) {
      return data.filter((item) =>
        item.category.toLowerCase() === selectedSubCategory.toLowerCase()
      );
    } else {
      return data;
    }
  }, [data, searchTerm, categoryGroup, selectedSubCategory]);

  return (
    <div className="filter">
      {searchTerm ? (
        <ul>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <li key={item.id}>{item.title}</li>)
          ) : (
            <li>No products found</li>
          )}
        </ul>
      ) : (
        <>
          <label htmlFor="subcategory-select">Choose a subcategory:</label>
          <select
            id="subcategory-select"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option value="">All</option>
            {listOfCategories[categoryGroup]?.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>

          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => <li key={item.id}>{item.title}</li>)
            ) : (
              <li>No products found</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Category;
