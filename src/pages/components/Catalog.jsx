import React from "react";
import CatalogItemTile from "./CatalogItemTile";
import "../../styles/catalog.css";
import ProductService from "../../services/product-service";

export default function Catalog({
  isAuthenticated,
  user,
  allItems,
  category,
  add,
  remove,
  catalogDisplayCount,
}) {
  function handleDelete(product) {
    ProductService.removeProduct(product._id)
      .then((result) => {
        setAllItems((prev) => {
          return prev.filter((item) => item._id !== product._id);
        });
      })
      .catch((e) => setError(e));
  }

  function renderProductList() {
    const result = allItems
      .filter((item) => {
        if (
          !category ||
          Object.keys(category).length === 0 ||
          category.name === "All Categories" ||
          item.category === category.name
        ) {
          return item;
        }
      })
      .map((item) => {
        return (
          <li key={item._id}>
            <CatalogItemTile
              isAuthenticated={isAuthenticated}
              user={user}
              item={item}
              add={add}
              remove={remove}
              deleteItem={handleDelete}
            />
          </li>
        );
      });
    if (result.length > catalogDisplayCount)
      return result.splice(0, catalogDisplayCount);
    return result;
  }

  return (
    <>
      <ul className="catalog-products">{renderProductList()}</ul>
    </>
  );
}
