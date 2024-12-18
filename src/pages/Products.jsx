/** Most likely obsolete file, added to implement filters on the catalog page */
import React from "react";
import Categories from "./components/Categories";

export default function Products(
  isAuthenticated,
  user,
  allItems,
  categories,
  category,
  add,
  remove,
  updateCategory,
  catalogDisplayCount,
  categoryStyle,
  isLoading
) {
  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading content, please wait ...</p>
        </div>
      )}
      <Categories
        categories={categories}
        selectedCategory={category}
        handleCategory={updateCategory}
        categoryStyle={categoryStyle}
      />
      <div>some content</div>
    </>
  );
}
