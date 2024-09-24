import React from "react";
import "../styles/cart.css";

export default function Cart({ items }) {
  console.log(items);
  function renderCartItems() {
    return items.map((item) => {
      return (
        <li key={item._id}>
          {item.name}:{item.cartQuantity}
        </li>
      );
    });
  }

  return (
    <div>
      <h3>Shopping Cart({items.length})</h3>
      <ul className="cart-products">{renderCartItems()}</ul>
    </div>
  );
}
