import React from "react";

export const Navbar = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <h1>Product Catalog </h1>
      </div>
      <div className="navbar-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="user-container">
        <button className="user">Dabhi Ravi</button>
      </div>
    </div>
  );
};
