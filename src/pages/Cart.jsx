import React from "react";
import CatalogItemTile from "./CatalogItemTile";
import "../styles/catalog.css";

export default function Cart({ items, add, remove }) {
  function renderCartItems() {
    return items.map((item) => {
      return (
        <li key={item._id}>
          <CatalogItemTile item={item} add={add} remove={remove} />
        </li>
      );
    });
  }

  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul className="catalog-products">{renderCartItems()}</ul>
    </div>
  );
}

{
  /* <li key={item._id}>
  {item.name}:{item.cartQuantity}
</li>; */
}

{
  /* <NavLink to={`./${item._id}`}>
            <img src={imageLogo} alt="image-logo" width="20px" height="20px" />
          </NavLink>
          <button onClick={() => handleDelete(item)}>x</button>
          <p>{item.name}</p>
          <p>{item.category}</p>
          <div className="catalog-item-buttonList">
            Quantity:
            <button onClick={() => remove(item)}>-</button>
            {item.quantity}
            <button onClick={() => add(item)}>+</button>
          </div> */
}
