import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../actions/ProductsAction';
import { useNavigate } from 'react-router-dom';

const Category = ({ products, onSelectCategory, selectedCategory }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCategory=(category)=>{
      dispatch(getAllProducts({searching:category,navigate}))
  }
  return (
    <div className="bg-white overflow-x-auto p-2">
      {/* Tombol untuk kategori "All" */}
      <button
        className={`bg-${selectedCategory === "All" ? "gray" : "yellow"}-200 text-gray-800 px-4 py-2 rounded-full mr-2`}
        onClick={() => handleCategory("All")}
      >
        All
      </button>
      {products.data && Array.isArray(products.data) ?
        products.data.map((product) => (
          <button
            key={product.id}
            className={`bg-${selectedCategory === product.category ? "gray" : "yellow"}-200 text-gray-800 px-4 py-2 rounded-full mr-2`}
            onClick={() => handleCategory(product.category)}
          >
            {product.category}
          </button>
        )) : null}
    </div>
  );
};

export default Category;
