import React from "react";
import "../styles/layout.css";
import Categories from "./Categories";
import Catalog from "./Catalog";

export default function Layout({ add, remove }) {
  const [selectecCategory, setSelectedCategory] = React.useState({});

  function updateCategory(category) {
    setSelectedCategory((prev) => category);
  }
  return (
    <div className="homePageLayout">
      <div className="sideNav">
        <Categories handleCategory={updateCategory} />
      </div>
      <div className="mainContent">
        <Catalog add={add} remove={remove} category={selectecCategory} />
      </div>
    </div>
  );
}
