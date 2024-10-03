import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Home({ cartTotal }) {
  return (
    <div className="container">
      <header>
        <ul className="navbar">
          <li>
            <NavLink to="/">#Logo</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/addproduct">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart {cartTotal}</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
