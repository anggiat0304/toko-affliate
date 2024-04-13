import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/ProductsAction";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate()
  const products = useSelector(state=>state.product)
  console.log(products)
  const dispatch = useDispatch()
  const handleVoiceSearch = () => {
    setIsRecording(true);

    const recognition = new window.webkitSpeechRecognition(); // Membuat objek recognition
    recognition.lang = "id-ID"; // Mengatur bahasa ke bahasa Indonesia
    recognition.start(); // Memulai perekaman suara

    recognition.onresult = function (event) {
      // Ketika hasil perekaman tersedia
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript)
      dispatch(getAllProducts({searching:transcript,navigate}))
    };

    recognition.onend = function () {
      // Ketika perekaman selesai
      setIsRecording(false);
    };
  };

  const handleTextSearch = () => {
    // Tambahkan logika untuk melakukan pencarian berdasarkan teks
    console.log("Melakukan pencarian berdasarkan teks:", searchText);
    dispatch(getAllProducts({searching:searchText,navigate}));
  };

  return (
    <div className="flex items-center p-2 rounded-lg">
      <div className="mr-2">
        <img
          src={isRecording ? "/microphone.png" : "/mic.png"}
          alt="Mic"
          className="w-5 h-5 cursor-pointer"
          onClick={handleVoiceSearch}
        />
      </div>
      <div className="relative flex-grow">
        <input
          type="text"
          style={{ width: "350px", paddingRight: "30px" }} // Sesuaikan padding kiri untuk memberikan ruang bagi gambar
          placeholder="Silahkan cari barang yang anda inginkan"
          className="px-4 py-2 rounded-lg bg-white border-gray-800"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img
          src="/search.png"
          alt="Search"
          className="absolute top-1/2 right-1 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          onClick={handleTextSearch}
        />
      </div>
    </div>
  );
};

export default Search;
