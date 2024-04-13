import React, { useEffect, useState } from 'react';
import RegisterModal from '../../components/RegisterModal';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux'; // Import useDispatch untuk memanggil aksi redux
import { signIn } from '../../actions/AuthenticationAction';// Import aksi signIn
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // State untuk mengontrol visibilitas modal
    const dispatch = useDispatch(); // Inisialisasi useDispatch untuk memanggil aksi redux
    const navigate = useNavigate();
    // Fungsi untuk menampilkan modal Register
    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };


    // Fungsi untuk menutup modal Register
    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    // Fungsi untuk menangani submit form login
    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah perilaku default dari form
        const username = event.target.username.value; // Mendapatkan nilai dari input username
        const password = event.target.password.value; // Mendapatkan nilai dari input password
        dispatch(signIn({ username, password, navigate }));// Memanggil aksi signIn dengan username dan password sebagai argumen
        
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="flex justify-center items-center w-1/2">
                    <img src="/shopping.jpeg" alt="Shopping" className="w-640 h-640" />
                </div>
                <div className="bg-gray-100 shadow-lg w-1/2 flex flex-col justify-center items-center p-8">
                    <form className="rounded-lg w-full max-w-md" onSubmit={handleSubmit}>
                        <h2 className="mb-4 text-center text-2xl font-klee-one" style={{ fontFamily: 'klee-one' }}>Log In</h2>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2 font-klee-one" style={{ fontFamily: 'klee-one' }}>Username</label>
                            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-klee-one" style={{ fontFamily: 'klee-one' }}>Password</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-700">
                            Login
                        </button>
                    </form>
                    <p className="mt-4 font-semibold">Belum punya akun? Silahkan daftar <span className="cursor-pointer" style={{ color: 'blue' }} onClick={openRegisterModal}>disini !</span></p>
                </div>
                <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
            </div>
        </div>
    );
};

export default LoginPage;
