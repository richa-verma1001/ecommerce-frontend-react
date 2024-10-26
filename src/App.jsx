import React from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import CatalogItem from "./pages/CatalogItem";
import Cart from "./pages/Cart";
import AddProduct from "./pages/admin/AddProduct";
import RegisterUser from "./pages/user/RegisterUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { isAuthenticated, user } = useAuth0();

  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem(user?.sub)) || []
  );
  const cartCount = getCartCount();

  function handleAddToCart(updatedItem) {
    console.log(cartItems);
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
    localStorage.setItem(user.sub, JSON.stringify(cartItems));
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
    localStorage.setItem(user.sub, JSON.stringify(cartItems));
  }

  function getCartCount() {
    return cartItems && cartItems.length !== 0
      ? cartItems.reduce((acc, curr) => acc + curr.cartQuantity, 0)
      : 0;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isAuthenticated={isAuthenticated}
                user={user}
                cartCount={cartCount}
              />
            }
          >
            <Route
              index
              element={
                <Layout
                  isAuthenticated={isAuthenticated}
                  user={user}
                  add={handleAddToCart}
                  remove={handleRemoveFromCart}
                />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  isAuthenticated={isAuthenticated}
                  user={user}
                  add={handleAddToCart}
                  remove={handleRemoveFromCart}
                />
              }
            />
            <Route path="/catalog/:id" element={<CatalogItem />} />
            {/* </Route> */}
            <Route
              path="/cart"
              element={
                <Cart
                  items={cartItems}
                  add={handleAddToCart}
                  remove={handleRemoveFromCart}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/register" element={<RegisterUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
