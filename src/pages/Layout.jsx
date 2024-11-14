import React from "react";
import "../styles/layout.css";
import Categories from "./components/Categories";
import Catalog from "./Catalog";

export default function Layout({
  isAuthenticated,
  user,
  allItems,
  categories,
  category,
  add,
  remove,
  updateCategory,
  catalogDisplayCount,
  handleBookmark,
}) {
  return (
    <div className="homePageLayout">
      <div className="mainContent">
        <h2 className="heading2">FEATURED PRODUCTS</h2>
        <Catalog
          isAuthenticated={isAuthenticated}
          user={user}
          allItems={allItems}
          category={category}
          add={add}
          remove={remove}
          catalogDisplayCount={catalogDisplayCount}
          handleBookmark={handleBookmark}
        />
      </div>
      <div className="sideNav">
        <Categories
          categories={categories}
          selectedCategory={category}
          handleCategory={updateCategory}
        />
      </div>
    </div>
  );
}
