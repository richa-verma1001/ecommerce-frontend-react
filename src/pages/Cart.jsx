import React from "react";
import CatalogItemTile from "./components/CatalogItemTile";
import "../styles/cart.css";
import "../styles/catalog.css";

export default function Cart({ items, add, remove }) {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [salexTax, setSalesTax] = React.useState(0);
  const [subTotal, setSubTotal] = React.useState(0);

  React.useEffect(() => {
    const itemsInCart = getCartItems();
    const total = itemsInCart
      .reduce((acc, item) => {
        return (
          acc +
          Number.parseInt(item.cartQuantity) * Number.parseFloat(item.price)
        );
      }, 0)
      .toFixed(2);
    const tax = ((8.25 * total) / 100).toFixed(2);
    const finalPrice = (
      Number.parseFloat(total) + Number.parseFloat(tax)
    ).toFixed(2);

    setCartItems(itemsInCart);
    setCartTotal(total);
    setSalesTax(tax);
    setSubTotal(finalPrice);
  }, [items]);

  function getCartItems() {
    return items.filter((item) => item.cartQuantity > 0);
  }

  function renderCartItems() {
    const result = items.map((item) => {
      if (item.cartQuantity > 0) {
        cartItems.push(item);
        return (
          <li key={item._id}>
            <CatalogItemTile
              item={item}
              add={add}
              remove={remove}
              isCart={true}
            />
          </li>
        );
      }
    });
    return result;
  }

  return (
    <div className="cart-layout">
      <div className="cart-layout__left">
        <h3>Cart</h3>
        <hr className="separator" />
        <ul className="cart-products">{renderCartItems()}</ul>
      </div>
      {items.length !== 0 && (
        <div className="cart-layout__right">
          <h3>Order Summary</h3>
          <hr className="separator" />
          <div className="order-summary-table">
            <div>
              <div className="col1">Subtotal</div>
              <div className="col2">${cartTotal}</div>
            </div>
            <div>
              <div className="col1">Tax</div>
              <div className="col2">${salexTax}</div>
            </div>
            <hr className="separator" />
            <div>
              <div className="col1">Total</div>
              <div className="col2">${subTotal}</div>
            </div>
            <div className="checkout">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
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
