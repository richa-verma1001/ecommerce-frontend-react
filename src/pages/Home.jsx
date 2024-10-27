import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Login from "./Login";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Home({ isAuthenticated, user, cartCount }) {
  return (
    <div className="container">
      <header>
        <ul className="navbar">
          <div className="navbar-left">
            <li>
              <NavLink className="navbar" to="/">
                #INSpire
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar" to="/catalog">
                Catalog
              </NavLink>
            </li>
            {/** TODO: Replace with RBAC (role based access control) */}
            {isAuthenticated && user.name === "Richa Verma" && (
              <li>
                <NavLink className="navbar" to="/addproduct">
                  Add Products
                </NavLink>
              </li>
            )}
          </div>
          <div className="navbar-right">
            <li>
              <NavLink className="navbar" to="/cart">
                <div className="badgeContainer">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <div className="badge">{cartCount}</div>
                </div>
              </NavLink>
            </li>
            <li>
              <Login />
            </li>
          </div>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
