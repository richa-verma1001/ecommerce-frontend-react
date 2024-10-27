import React from "react";
import "../styles/categories.css";
import CategoryService from "../services/categories-service";

export default function Categories({
  categories,
  selectedCategory,
  handleCategory,
}) {
  function renderCategories() {
    return categories.map((category) => (
      <li
        key={category.id}
        className={category.id === selectedCategory.id ? "selected" : ""}
      >
        <button onClick={() => handleCategory(category)}>
          {category.name.toUpperCase()}
        </button>
      </li>
    ));
  }

  // if (loading) return <div>Loading ...</div>;
  // fetch list of categories from db
  // show items for each category when clicked
  return (
    <div className="sidenav-categories">
      {/* {error && <div>{error.message}</div>} */}
      <h2 className="heading">DISCOVER</h2>
      <ul>{renderCategories()}</ul>
    </div>
  );
}
