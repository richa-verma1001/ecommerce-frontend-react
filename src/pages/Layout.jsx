import React from "react";
import "../styles/layout.css";
import Categories from "./Categories";
import Catalog from "./Catalog";

export default function Layout({ isAuthenticated, user, add, remove }) {
  const [selectedCategory, setSelectedCategory] = React.useState({});

  function updateCategory(category) {
    setSelectedCategory((prev) => category);
  }
  return (
    <div className="homePageLayout">
      <div className="mainContent">
        <Catalog
          isAuthenticated={isAuthenticated}
          user={user}
          add={add}
          remove={remove}
          category={selectedCategory}
        />
      </div>
      <div className="sideNav">
        <Categories handleCategory={updateCategory} />
      </div>
    </div>
  );
}
