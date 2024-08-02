import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { searchContext } from "../../App";
import ProductList from "../ProductFilters/ProductList";
import SubCategoryFilter from "../ProductFilters/SubCategoryFilter";
import { LIST_OF_CATEGORIES } from "../ProductFilters/Constants";
import "../../Styles/Category.css";

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
        <>
          {searchTerm ? null : (
            <SubCategoryFilter
              categoryGroup={categoryGroup}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={setSelectedSubCategory}
            />
          )}
          <ProductList products={filteredProducts} />
        </>
      )}
    </div>
  );
};

export default Category;
