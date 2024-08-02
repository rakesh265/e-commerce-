import React from "react";
import { LIST_OF_CATEGORIES } from "./Constants";
// import "../../Styles/Category.css"; // Uncomment this if you have a specific stylesheet for the Category component

const SubCategoryFilter = ({
  categoryGroup,
  selectedSubCategory,
  setSelectedSubCategory,
}) => (
  <div className="subcategory-filter-container">
    <label>Choose a subcategory:</label><br />
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
);

export default SubCategoryFilter;
