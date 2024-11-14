import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CatalogItemTile({
  isAuthenticated,
  user,
  item,
  add,
  remove,
  deleteItem,
  isCart,
  handleCartDelete,
  handleBookmark,
}) {
  const location = useLocation();
  const [isFavorite, setIsFavorite] = React.useState(item.isFavorite || false);
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
    // handleBookmark
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
    <div className="cart-details">
      <div className="product-tile">
        <NavLink className="product-tile__image" to={`/catalog/${item._id}`}>
          <img src={item.imageUrl} alt="image-logo" />
        </NavLink>
        <div className="product-tile__info">
          <div className="left">
            <p>
              {item.name.length > 20
                ? `${item.name.slice(0, 20)}...`
                : item.name}
            </p>
          </div>
          <div className="right">
            {!isCart && (
              <div
                className="bookmark"
                onClick={() => handleBookmark(item)}
                style={{ cursor: "pointer", fontSize: "0.9rem" }}
              >
                <FontAwesomeIcon
                  icon={item.isFavorite ? solidHeart : regularHeart}
                  color={item.isFavorite ? "black" : "black"}
                />
              </div>
            )}
            {isCart && (
              <div
                className="removeFromCart"
                onClick={() => handleCartDelete(item)}
              >
                <FontAwesomeIcon icon={faTrash} color={"black"} />
              </div>
            )}
          </div>
        </div>
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
            <button onClick={() => removeFromCart(item)}>
              <p>-</p>
            </button>
            <p>{item.cartQuantity || 0}</p>
            <button onClick={() => addToCart(item)}>
              <p>+</p>
            </button>
            {isAuthenticated && user.name === "Richa Verma" && (
              <button onClick={() => deleteItem(item)}>
                <p>x</p>
              </button>
            )}
          </div>
          <div className="right">
            <p>${Number.parseFloat(item.price)}</p>
          </div>
        </div>
      </div>
      {/* <div className="item-details">Each Item</div> */}
    </div>
  );
}
