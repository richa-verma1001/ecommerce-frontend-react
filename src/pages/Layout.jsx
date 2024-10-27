import React from "react";
import "../styles/layout.css";
import Categories from "./Categories";
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
}) {
  console.log(category);
  return (
    <div className="homePageLayout">
      <div className="mainContent">
        <Catalog
          isAuthenticated={isAuthenticated}
          user={user}
          allItems={allItems}
          category={category}
          add={add}
          remove={remove}
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
