import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price }) => {
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-300 shadow-md transition duration-300 transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-3 p-4">
        <h3 className="text-white font-semibold text-lg text-center">{name}</h3>
        <p className="text-gray-200 text-center">Rp. {price.toLocaleString()}</p>
        <Link to={`/product-detail/${id}`} className="text-yellow-500 hover:none font-bold">Lebih Detail</Link>
      </div>
    </div>
  );
};

export default ProductCard;
