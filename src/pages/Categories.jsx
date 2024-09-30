import React from "react";
import "../styles/categories.css";
import config from "../config/config";

export default function Categories({ handleCategory }) {
  const [categories, setCatgories] = React.useState([]);

  React.useEffect(() => {
    fetch(`${config.API_BASE_URL}/category`)
      .then((res) => res.json())
      .then((data) => setCatgories(data));
  }, []);

  function renderCategories() {
    return categories.map((category) => (
      <li key={category._id}>
        <button onClick={() => handleCategory(category)}>
          {category.name}
        </button>
      </li>
    ));
  }
  // fetch list of categories from db
  // show items for each category when clicked
  return (
    <div className="sidenav-categories">
      <ul>{renderCategories()}</ul>
    </div>
  );
}
