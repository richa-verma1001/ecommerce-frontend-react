import React from "react";
import "../../styles/categories.css";
import CategoryService from "../../services/categories-service";

export default function Categories({
  categories,
  selectedCategory,
  handleCategory,
}) {
  function renderCategories() {
    return categories.map((category) => (
      <li
        key={category._id}
        className={category._id === selectedCategory._id ? "selected" : ""}
      >
        <button onClick={() => handleCategory(category)}>
          {category.name.toUpperCase()}
        </button>
      </li>
    ));
  }

  return (
    <div className="sidenav-categories">
      <h2 className="heading2">DISCOVER</h2>
      <ul>{renderCategories()}</ul>
    </div>
  );
}
