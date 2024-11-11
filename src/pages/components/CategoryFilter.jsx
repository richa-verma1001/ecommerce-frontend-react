import React from "react";

export default function CategoryFilter({
  categories,
  selectedCategory,
  updateCategory,
}) {
  function handleCategoryChange(event) {
    console.log(event.target.value);
    updateCategory(event.target.value);
  }
  function renderCategories() {
    return categories.map((item) => {
      return (
        <option key={item._id} id={item._id} value={item.name}>
          {item.name}
        </option>
      );
    });
  }
  return (
    <div className="selectionBox">
      Category:
      <select id="" name="category-filter" onChange={handleCategoryChange}>
        {renderCategories()}
      </select>
    </div>
  );
}
