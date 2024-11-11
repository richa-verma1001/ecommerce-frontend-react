import React from "react";
import ProductTile from "./ProductTile";

export default function CatalogItemList({
  isAuthenticated,
  user,
  allItems,
  category,
  tag,
  add,
  remove,
}) {
  function renderProductList() {
    return allItems.map((item) => {
      if (
        !category ||
        Object.keys(category).length === 0 ||
        category.name === "All Categories" ||
        item.category === category.name
      )
        return (
          <li key={item._id}>
            <ProductTile
              isAuthenticated={isAuthenticated}
              user={user}
              item={item}
              add={add}
              remove={remove}
            />
          </li>
        );
    });
  }
  return <ul className="catalog-products">{renderProductList()}</ul>;
}
