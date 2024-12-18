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
import CategoryService from "./services/categories-service";
import ProductService from "./services/product-service";
import "./App.css";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [selectedCategory, setSelectedCategory] = React.useState({});
  const [allItems, setAllItems] = React.useState(
    JSON.parse(sessionStorage.getItem("catalog")) || []
  );
  const [categories, setCatgories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const cartCount = getCartCount();

  React.useEffect(() => {
    if (allItems.length === 0) {
      ProductService.getProducts()
        .then((data) => {
          setAllItems(data);
          setError(null);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  React.useEffect(() => {
    CategoryService.getCategories()
      .then((data) => setCatgories(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem("catalog", JSON.stringify(allItems));
  }, [allItems]);

  function updateCategory(category) {
    setSelectedCategory((prev) => category);
  }

  function handleBookmark(updateItem) {
    console.log(updateItem);
    setAllItems((prev) => {
      return prev.map((item) =>
        item._id === updateItem._id
          ? { ...item, isFavorite: !updateItem.isFavorite }
          : item
      );
    });
  }
  function handleAddToCart(updatedItem) {
    setAllItems((prev) => {
      return prev.map((item) =>
        item._id === updatedItem._id
          ? {
              ...item,
              cartQuantity: (item.cartQuantity || 0) + 1,
            }
          : item
      );
    });
  }

  // TODO: handle disable button for 0 or negative quantities
  function handleRemoveFromCart(updatedItem) {
    setAllItems((prev) => {
      return prev.map((item) =>
        item._id === updatedItem._id
          ? { ...item, cartQuantity: item.cartQuantity - 1 }
          : item
      );
    });
  }

  function handleRemoveAllFromCart(updatedItem) {
    setAllItems((prev) => {
      return prev.map((item) =>
        item._id === updatedItem._id ? { ...item, cartQuantity: 0 } : item
      );
    });
  }

  function getCartCount() {
    return allItems.reduce((acc, curr) => acc + (curr.cartQuantity || 0), 0);
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
                isLoading={loading}
                isError={error}
              />
            }
          >
            <Route
              index
              element={
                <Layout
                  isAuthenticated={isAuthenticated}
                  user={user}
                  allItems={allItems}
                  categories={categories}
                  category={selectedCategory}
                  add={handleAddToCart}
                  remove={handleRemoveFromCart}
                  updateCategory={updateCategory}
                  catalogDisplayCount={12}
                  handleBookmark={handleBookmark}
                />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  isAuthenticated={isAuthenticated}
                  user={user}
                  allItems={allItems}
                  add={handleAddToCart}
                  remove={handleRemoveFromCart}
                  handleBookmark={handleBookmark}
                />
              }
            />
            <Route path="/catalog/:id" element={<CatalogItem />} />
            {/* </Route> */}
            <Route
              path="/cart"
              element={
                <Cart
                  items={allItems}
                  add={handleAddToCart}
                  remove={handleRemoveFromCart}
                  removeFromCart={handleRemoveAllFromCart}
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
