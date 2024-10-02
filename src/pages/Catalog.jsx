import React from "react";
import config from "../config/config";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/catalog.css";
import imageLogo from "/images/image.svg";
import ProductService from "../services/product-service";

export default function Catalog({ add, remove, category }) {
  const [allItems, setAllItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const categoryName = category?.name || "";
    ProductService.getProducts(categoryName)
      .then((data) => {
        setAllItems(data);
        setError(null);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [category]);

  function renderProductList() {
    return allItems.map((item) => (
      <li key={item._id}>
        <NavLink to={`./${item._id}`}>
          <img src={imageLogo} alt="image-logo" width="20px" height="20px" />
        </NavLink>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <div className="catalog-item-buttonList">
          <button onClick={() => remove(item)}>-</button>
          <button onClick={() => add(item)}>+</button>
        </div>
      </li>
    ));
  }
  if (loading) return <div>Loading ...</div>;

  return (
    <>
      <div>
        <h3>CatalogPage</h3>
        {error && <div>{error.message}</div>}
        <ul className="catalog-products">{renderProductList()}</ul>
        <p></p>
      </div>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}
