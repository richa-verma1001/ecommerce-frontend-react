import React from "react";
import "../styles/layout.css";
import Categories from "./components/Categories";
import CatalogFilters from "./components/CatalogFilters";
import Catalog from "./Catalog";

export default function Layout({
  isAuthenticated,
  user,
  allItems,
  categories,
  category,
  tag,
  add,
  remove,
  updateCategory,
  updateTag,
}) {
  return (
    <div className="homePageLayout">
      <div className="mainContent">
        {/* <CatalogFilters selectedTag={tag} updateTag={updateTag} /> */}
        <Catalog
          isAuthenticated={isAuthenticated}
          user={user}
          allItems={allItems}
          categories={categories}
          category={category}
          tag={tag}
          add={add}
          remove={remove}
          updateCategory={updateCategory}
        />
      </div>
      <div className="sideNav">
        <Categories
          categories={categories}
          selectedCategory={category}
          updateCategory={updateCategory}
        />
      </div>
    </div>
  );
}
