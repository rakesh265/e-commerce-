import React, { useEffect, useState, useMemo, useContext } from "react";
import axios from "axios";
import "../Styles/Filter.css";
import { searchContext } from "../App";

const Filter = () => {
  const { categoryGroup } = useContext(searchContext);

  const [data, setData] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=0");
        setData(res.data.products);
      } catch (err) {
        setError("Failed to fetch data. Please check your internet connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const listOfCategories = useMemo(() => ({
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
    "Sports & Vehicles": [
      "motorcycle",
      "sports-accessories",
      "vehicle",
    ],
  }), []);

  const filteredData = useMemo(() => {
    return selectedSubCategory
      ? data.filter((item) =>
          item.category.toLowerCase() === selectedSubCategory.toLowerCase()
        )
      : data.filter((item) =>
          listOfCategories[categoryGroup]?.some(
            (subcategory) => item.category.toLowerCase() === subcategory.toLowerCase()
          )
        );
  }, [data, selectedSubCategory, categoryGroup, listOfCategories]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="filter">
      <h1>Filtered Products</h1>
      
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
        {filteredData.length > 0 ? (
          filteredData.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
};

export default Filter;
