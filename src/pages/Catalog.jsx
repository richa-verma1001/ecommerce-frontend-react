import React from "react";
import config from "../config/config";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/catalog.css";
import imageLogo from "/images/image.svg";

export default function Catalog({ add, remove, category }) {
  const [allItems, setAllItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const categoryName = category?.name || "";
  const url =
    categoryName !== ""
      ? `${config.API_BASE_URL}/products?category=${categoryName}`
      : `${config.API_BASE_URL}/products`;

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function renderProductList() {
    return allItems.map((item) => (
      <li key={item._id}>
        <NavLink to={`./${item._id}`}>
          <img src={imageLogo} alt="Image logo" width="20px" height="20px" />
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
        <ul className="catalog-products">{renderProductList()}</ul>
        <p></p>
      </div>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}
