import React from "react";
import "../styles/categories.css";
// import config from "../config/config";
import CategoryService from "../services/categories-service";

export default function Categories({ handleCategory }) {
  const [categories, setCatgories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    CategoryService.getCategories()
      .then((data) => setCatgories(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
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

  if (loading) return <div>Loading ...</div>;
  // fetch list of categories from db
  // show items for each category when clicked
  return (
    <div className="sidenav-categories">
      {error && <div>{error.message}</div>}
      <ul>{renderCategories()}</ul>
    </div>
  );
}
