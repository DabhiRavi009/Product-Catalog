import React from "react";
import "../App.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <div className="detail-container">
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
          <div className="btn-container">
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
