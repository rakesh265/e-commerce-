import axios from "axios";
import React, { useState, useEffect, useContext, useMemo } from "react";
import { searchContext } from "../App";

const Category = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useContext(searchContext);

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

  // Filter products based on searchTerm
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return data;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter(product =>
      product.tags.some(tag =>
        tag.toLowerCase().includes(lowerSearchTerm)
      ) || 
      product.title.toLowerCase().includes(lowerSearchTerm)
    );
  }, [data, searchTerm]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="product" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="product-img"
                />
                <span>{item.title}</span>
                <span>{item.tags.join(", ")}</span>
                <span>{item.category}</span>
              </div>
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
