// AddToCart.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cart.css';


const AddToCart = ({ product, onAddToCart }) => {
  return (
    <a href="#" onClick={(e) => {
      e.preventDefault(); // Linkin varsayılan davranışını engelle
      onAddToCart(product);
    }}>
      <FaShoppingCart />
    </a>
  );
};

export default AddToCart;
