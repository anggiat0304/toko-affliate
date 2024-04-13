import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../actions/AuthenticationAction';
import Search from './Search';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth);
  const fullname = localStorage.getItem('fullname')
  const username = localStorage.getItem('username')
  const [showDropdown, setShowDropdown] = useState(false);
  const avatar = localStorage.getItem('avatar')
  const isAuthenticated = localStorage.getItem('isLogged');
   // Fungsi untuk menampilkan dropdown
   const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  useEffect(()=>{
      !isAuthenticated  && dispatch(signOut({navigate}))
  },[isAuthenticated,navigate,dispatch])
  const handleLogout = () => {
      dispatch(signOut({navigate}));
  };
  return (
    <div className="flex justify-between items-center bg-yellow-200 h-50" style={{ height: '50px' }}>
    <div className="flex items-center ml-8">
      <h1 className="text-2xl text-gray-800" style={{ fontFamily: 'klee-one', fontStyle: 'semi-bold' }}>Toko Affiliate</h1>
    </div>
    {isAuthenticated && (
      <div className="ml-4 flex items-center relative" style={{marginRight:'10px'}}>
        <Search/>
        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
          <img
            src={avatar}
            alt="Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="ml-2">{username}</span>
          <div className="ml-2">
            <img
              src="/down.png" // Ganti dengan path menuju gambar dropdown icon
              alt="Dropdown"
              className="h-4 w-4"
            />
          </div>
        </div>
        {showDropdown && (
          <div className="absolute top-full right-0 bg-white border rounded shadow-md mt-2">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
              {/* Anda dapat menambahkan opsi dropdown lainnya di sini */}
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default Header;
