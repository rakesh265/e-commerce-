import React from "react";
import { LIST_OF_CATEGORIES } from "./Constants";

const SubCategoryFilter = ({
  categoryGroup,
  selectedSubCategory,
  setSelectedSubCategory,
}) => (
  <>
    <label htmlFor="subcategory-select">Choose a subcategory:</label>
    <select
      id="subcategory-select"
      value={selectedSubCategory}
      onChange={(e) => setSelectedSubCategory(e.target.value)}
    >
      <option value="">All</option>
      {LIST_OF_CATEGORIES[categoryGroup]?.map((subCategory) => (
        <option key={subCategory} value={subCategory}>
          {subCategory}
        </option>
      ))}
    </select>
  </>
);

export default SubCategoryFilter;
