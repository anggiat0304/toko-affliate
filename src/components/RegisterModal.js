import React, { useState } from 'react';

const RegisterModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Tambahkan logika untuk registrasi pengguna di sini
    console.log('Registrasi pengguna dengan:');
    console.log('Nama Lengkap:', fullName);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex justify-center items-center h-screen bg-white bg-opacity-90">
        <div className="bg-white p-8 rounded-lg shadow-lg flex">
          <div className="w-1/2 pr-4">
            <img src="/welcome.png" alt="Welcome" className="w-full h-auto" />
          </div>
          <div className="w-1/2">
            <button className="absolute top-0 right-0 m-4 font-bold"onClick={onClose}>X</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2">Nama Lengkap</label>
              <input type="text" id="fullName" name="fullName" className="w-full border border-gray-300 rounded-lg px-4 py-2" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">Username</label>
              <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-lg px-4 py-2" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-lg px-4 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleRegister} className="w-full bg-green-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-green-700">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
