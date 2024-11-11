import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidHeart } from "@fortawesome/free-solid-svg-icons";

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
  const isHomePage =
    location.pathname === "/" || location.pathname === "/cart"
      ? "/catalog"
      : "";

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
      <NavLink className="product-tile__image" to={`/catalog/${item._id}`}>
        <img src={item.imageUrl} alt="image-logo" />
      </NavLink>
      <div className="product-tile__info">
        {/* <div className="left">
          <NavLink
            className="product-tile__desc "
            to={`.${isHomePage}/${item._id}`}
          >
            <p>
              {item.name.length > 15
                ? `${item.name.slice(0, 15)}...`
                : item.name}
            </p>
          </NavLink>
        </div> */}
        <div className="left catalog-item__buttonList">
          <button onClick={() => removeFromCart(item)}>-</button>
          {item.cartQuantity || 0}
          <button onClick={() => addToCart(item)}>+</button>
          {isAuthenticated && user.name === "Richa Verma" && (
            <button onClick={() => deleteItem(item)}>x</button>
          )}
        </div>
        <div
          className="right"
          onClick={handleToggle}
          style={{ cursor: "pointer", fontSize: "16px" }}
        >
          <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}
            color={isFavorite ? "black" : "black"}
          />
        </div>
      </div>
    </div>
  );
}
