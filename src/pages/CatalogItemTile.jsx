import React from "react";
import AddToCart from "./components/AddToCart";
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
      <NavLink className="product-tile__image" to={`.${isHomePage}/${item.id}`}>
        <img src={item.images[0]} alt="image-logo" />
      </NavLink>
      <div className="product-tile__info">
        <div className="left">
          <AddToCart
            isAuthenticated={isAuthenticated}
            user={user}
            item={item}
            add={add}
            remove={remove}
            deleteItem={deleteItem}
          />
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
    </div>
  );
}
