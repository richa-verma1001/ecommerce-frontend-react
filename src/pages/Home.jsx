import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home({ cartTotal }) {
  const { isAuthenticated } = useAuth0();

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
          {isAuthenticated && (
            <>
              <li>
                <NavLink to="/catalog">Catalog</NavLink>
              </li>
              <li>
                <NavLink to="/addproduct">Add Products</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart {cartTotal}</NavLink>
              </li>
            </>
          )}
          <li>
            {/* <NavLink to="/login"> */}
            <Login />
            {/* </NavLink> */}
          </li>
          {/* <li>
            <NavLink to="/register">Register</NavLink>
          </li> */}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
