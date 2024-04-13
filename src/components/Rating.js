import React from 'react';

const Rating = ({ totalRating }) => {
  const renderStars = () => {
    const stars = [];
    // Loop untuk membuat setiap bintang
    for (let i = 1; i <= 5; i++) {
      if (i <= totalRating) {
        // Jika nilai rating lebih besar dari atau sama dengan indeks bintang, maka bintang tersebut penuh
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      } else {
        // Jika nilai rating lebih kecil dari indeks bintang, maka bintang tersebut kosong
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div>
      {renderStars()}
    </div>
  );
};

export default Rating;
