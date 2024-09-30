// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import CatalogItem from "./pages/CatalogItem";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const cartTotal = getCartTotal();

  function handleAddToCart(updatedItem) {
    setCartItems((prev) => {
      if (isExistingItem(updatedItem)) {
        return prev.map((item) =>
          item._id === updatedItem._id
            ? {
                ...item,
                cartQuantity: (item.cartQuantity || 0) + 1,
              }
            : item
        );
      } else {
        return [...prev, { ...updatedItem, cartQuantity: 1 }];
      }
    });
  }

  function isExistingItem(item) {
    return cartItems.find((elem) => elem._id === item._id);
  }

  // TODO: handle disable button for 0 or negative quantities
  function handleRemoveFromCart(updatedItem) {
    cartItems &&
      cartItems.length > 0 &&
      setCartItems((prev) => {
        if (isExistingItem(updatedItem)) {
          return prev.map((item) =>
            item._id === updatedItem._id &&
            item.cartQuantity &&
            item.cartQuantity == 1
              ? null
              : item._id === updatedItem._id
              ? {
                  ...item,
                  cartQuantity: (item.cartQuantity || 0) - 1,
                }
              : item
          );
        }
      });
  }

  function getCartTotal() {
    return cartItems && cartItems.length !== 0
      ? cartItems.reduce((acc, curr) => acc + curr.cartQuantity, 0)
      : 0;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cartTotal={cartTotal} />}>
            <Route
              index
              element={
                <Layout add={handleAddToCart} remove={handleRemoveFromCart} />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog add={handleAddToCart} remove={handleRemoveFromCart} />
              }
            />
            <Route path="/catalog/:id" element={<CatalogItem />} />
            {/* </Route> */}
            <Route path="/cart" element={<Cart items={cartItems} />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
