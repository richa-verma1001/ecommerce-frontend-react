import React from "react";

export default function AddToCart({
  isAuthenticated,
  user,
  item,
  add,
  remove,
  deleteItem,
}) {
  const [count, setCount] = React.useState(0);

  function addToCart(item) {
    setCount((prev) => prev + 1);
    add(item);
  }

  function removeFromCart(item) {
    setCount((prev) => prev - 1);
    remove(item);
  }

  return (
    <div className="left catalog-item__buttonList">
      <button onClick={() => removeFromCart(item)}>-</button>
      {item.cartQuantity || 0}
      <button onClick={() => addToCart(item)}>+</button>
      {isAuthenticated && user.name === "Richa Verma" && (
        <button onClick={() => deleteItem(item)}>x</button>
      )}
    </div>
  );
}
