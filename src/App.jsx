// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import CatalogItem from "./pages/CatalogItem";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [numCartItems, setNumCartItems] = React.useState(0);

  function handleAddToCart() {
    console.log("Add to cart");
    setNumCartItems((prev) => prev + 1);
  }
  function handleRemoveFromCart() {
    console.log("Remove from cart");
    setNumCartItems((prev) => prev - 1);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cartTotal={numCartItems} />}>
            {/* <Route index element={<Home />} /> */}
            <Route
              path="/catalog"
              element={
                <Catalog add={handleAddToCart} remove={handleRemoveFromCart} />
              }
            />
            <Route path="/catalog/:id" element={<CatalogItem />} />
            {/* </Route> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
