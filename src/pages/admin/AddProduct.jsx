import React from "react";
import "../../styles/admin/addproduct.css";
import CategoryService from "../../services/categories-service";
import ProductService from "../../services/product-service";

export default function AddProduct() {
  const [formData, setFormData] = React.useState({
    name: "",
    quantity: "",
    category: "",
  });

  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    CategoryService.getCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    ProductService.addProduct(formData).then((response) => {
      if (!response.ok) {
        setError("Unable to add item");
        setMessage("");
      } else {
        setMessage("Item added successfully");
        setError("");
      }
    });
  }

  function renderCategories() {
    return categories.map((category) => {
      return (
        <option id={category._id} key={category._id} value={category.name}>
          {category.name}
        </option>
      );
    });
  }

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      <form className="addProduct" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="category">Type:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option>--Choose Type---</option>
            {renderCategories()}
          </select>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
