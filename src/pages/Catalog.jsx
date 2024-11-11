import React from "react";
import "../styles/catalog.css";
import CatalogItemList from "./components/CatalogItemList";
import CategoryFilter from "./components/CategoryFilter";
import Sort from "./components/Sort";

export default function Catalog({
  isAuthenticated,
  user,
  allItems,
  categories,
  category,
  tag,
  add,
  remove,
  updateCategory,
}) {
  // console.log(categories);
  return (
    <>
      <div className="filters">
        <CategoryFilter
          categories={categories}
          selectedCategory={category}
          updateCategory={updateCategory}
        />

        <Sort />
      </div>
      <div>
        <CatalogItemList
          isAuthenticated={isAuthenticated}
          user={user}
          allItems={allItems}
          category={category}
          tag={tag}
          add={add}
          remove={remove}
        />
      </div>
    </>
  );
}
