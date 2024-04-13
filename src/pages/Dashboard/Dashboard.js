import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import Breadcrumb from "../../components/Breadcrumb";
import Category from "../../components/Category";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../components/Header";
import { getAllProducts } from "../../actions/ProductsAction";
import { useNavigate } from "react-router-dom";
import isAuthentication from "../../util/CheckAuthentication";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searching, setSearching] = useState("");
  const products = useSelector(state => state.product);
  const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem('isLogged');
  const navigate = useNavigate()
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(()=>{
    isAuthentication({isAuthentication :isAuthenticated, navigate:navigate})
  },[isAuthenticated])
  useEffect(() => {
    dispatch(getAllProducts({searching:'all',navigate}));
  }, [dispatch, searching]);

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = selectedCategory === "All" ? products.data : products.data.filter(product => product.category === selectedCategory);
  console.log(filteredProducts)
  console.log(selectedCategory)
  return (
    <div>
      <div style={{ padding: '10px' }}>
        <Category
          products={products}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="overflow-y-auto max-h-600 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-6" style={{ padding: '10px' }}>
        {/* Menampilkan produk yang telah difilter */}
        {filteredProducts && Array.isArray(filteredProducts) ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
