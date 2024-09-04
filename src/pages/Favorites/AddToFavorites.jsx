// AddToFavorites.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './favorites.css';

const AddToFavorites = ({ product, onAddToFavorites }) => {
  return (
    <a href="#" onClick={(e) => {
      e.preventDefault(); // Linkin varsayılan davranışını engelle
      onAddToFavorites(product);
    }}>
      <FaHeart />
    </a>
  );
};

export default AddToFavorites;
