import React from "react";
import "../App.css";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="list">
              <p>{product.name} - ${product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
