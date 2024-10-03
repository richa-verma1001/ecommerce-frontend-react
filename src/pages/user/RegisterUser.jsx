import React from "react";
import UserService from "../../services/user-service";

export default function RegisterUser() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    UserService.addUser(formData)
      .then((res) => {
        if (!res.ok) {
          setError("Error while adding user");
          setMessage("");
        } else {
          setMessage("User Added Successfully");
          resetFormData();
        }
      })
      .catch((err) => setError(error));
  }

  function resetFormData() {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}
