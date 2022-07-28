import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row ">
        <li className="mx-1">
          <Link to="/">Inventory</Link>
        </li>
        <li className="mx-1">
          <Link to="/Search">Search</Link>
        </li>
        <li className="mx-1">
          <Link to="/Update">Update Inventory</Link>
        </li>
        <li className="mx-1">
          <Link to="/logIn">Log In</Link>
        </li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1 nav">
      <nav>
        {showNavigation()}
        
      </nav>
    </header>
  );
}

export default Nav;
