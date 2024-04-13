import React from 'react';

const DetailCard = ({ productName, description, price }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      {/* Baris pertama: Nama produk */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{productName}</h2>
      </div>

      {/* Baris kedua: Deskripsi produk */}
      <div className="mb-4">
        <p>{description}</p>
      </div>

      {/* Baris ketiga: Harga dan tombol untuk cek barang di Shopee */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Harga: Rp. {price.toLocaleString()}</p>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Cek Barang di Shopee</button>
      </div>
    </div>
  );
};

export default DetailCard;
