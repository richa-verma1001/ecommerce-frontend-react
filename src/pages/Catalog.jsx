import React from "react";
import CatalogItemTile from "./CatalogItemTile";
import "../styles/catalog.css";
import ProductService from "../services/product-service";

export default function Catalog({
  isAuthenticated,
  user,
  allItems,
  add,
  remove,
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
    return allItems.map((item) => (
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
    ));
  }
  // if (loading) return <div>Loading ...</div>;

  return (
    <>
      {/* <h3>CatalogPage</h3> */}
      {/* {error && <div className="error">{error.message}</div>} */}
      <ul className="catalog-products">{renderProductList()}</ul>
      <p></p>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}
