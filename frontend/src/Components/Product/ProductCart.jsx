// ProductCard.js (Component)

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-fil object-center" />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black-900 mb-2">{product.title}</h2>
        <p className="text-black-700">${product.price}</p>
        <p className="text-gray-700">{product.color}</p>
        <Link
          to={`/products/${product._id}`}
          className="block mt-3 bg-stone-400 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-sm text-sm text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
