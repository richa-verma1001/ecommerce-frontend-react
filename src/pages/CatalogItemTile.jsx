import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default function CatalogItemTile({
  isAuthenticated,
  user,
  item,
  add,
  remove,
  deleteItem,
}) {
  const location = useLocation();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const isHomePage = location.pathname === "/" ? "/catalog" : "";

  // console.log(`item: ${item.name} count:${count}`);
  const tileCount =
    location.pathname === "/" || location.pathname === "/catalog"
      ? count
      : item.cartQuantity;

  const handleToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  function addToCart(item) {
    setCount((prev) => prev + 1);
    add(item);
  }

  function removeFromCart(item) {
    setCount((prev) => prev - 1);
    remove(item);
  }
  return (
    <div className="product-tile">
      <NavLink
        className="product-tile__image"
        to={`.${isHomePage}/${item._id}`}
      >
        <img src={item.imageUrl} alt="image-logo" />
      </NavLink>
      <div className="product-tile__info">
        <div className="left">
          <NavLink
            className="product-tile__desc "
            to={`.${isHomePage}/${item._id}`}
          >
            <p>{item.name}</p>
          </NavLink>
          {/* <p>$ {item.price}</p> */}
        </div>
        <div
          className="right"
          onClick={handleToggle}
          style={{ cursor: "pointer", fontSize: "16px" }}
        >
          <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}
            color={isFavorite ? "red" : "black"}
          />
        </div>
      </div>
      <div className="catalog-item__buttonList">
        <button onClick={() => removeFromCart(item)}>-</button>
        {item.cartQuantity || 0}
        <button onClick={() => addToCart(item)}>+</button>
        {isAuthenticated && user.name === "Richa Verma" && (
          <button onClick={() => deleteItem(item)}>x</button>
        )}
      </div>
    </div>
  );
}
