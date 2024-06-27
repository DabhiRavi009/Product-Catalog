import React, { useState } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import hairdryer from "../components/images/hairdryer.jpeg";
import treamer from "../components/images/treamer.jpeg";
import curls from "../components/images/curls.jpeg";
import concelor from "../components/images/concelor.jpeg";
import makeUp from "../components/images/makeup.jpeg";
import makeUpBrushes from "../components/images/makeup-brushes.jpeg";

import "../App.css";

const initialProducts = [
  {
    id: 1,
    name: "Hair Dryer",
    price: 29.99,
    image: hairdryer,
  },
  {
    id: 2,
    name: "Curl Machine",
    price: 19.99,
    image: curls,
  },
  {
    id: 3,
    name: "Treamer",
    price: 39.99,
    image: treamer,
  },
  {
    id: 4,
    name: "Concelour",
    price: 39.99,
    image: concelor,
  },
  {
    id: 5,
    name: "Makeup Products",
    price: 39.99,
    image: makeUp,
  },
  {
    id: 6,
    name: "Makeup Brushes",
    price: 39.99,
    image: makeUpBrushes,
  },
];

const ProductCatalog = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className="product-catalog">
      <ProductList products={initialProducts} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductCatalog;
