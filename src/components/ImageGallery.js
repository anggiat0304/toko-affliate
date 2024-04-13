import React, { useState, useEffect } from "react";

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(images);

  // Gunakan useEffect untuk menetapkan mainImage saat komponen pertama kali dipasang
  useEffect(() => {
    if(images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]); // Tentukan images sebagai dependensi untuk useEffect

  const handleImageClick = (image) => {
    if (mainImage === null) {
      setMainImage(image);
    } else {
      const index = galleryImages.findIndex((img) => img === image);
      const newImages = [...galleryImages];
      newImages.splice(index, 1);
      newImages.unshift(mainImage);
      setGalleryImages(newImages);
      setMainImage(image);
    }
  };

  const handleMoreImagesClick = () => {
    setMainImage(galleryImages[0]);
    setGalleryImages(galleryImages.slice(1));
  };

  return (
    <div className="flex flex-col items-center">
      {mainImage && (
        <img
          src={mainImage}
          alt="Main Image"
          className="w-200 h-300 mb-4"
          style={{width:'300px'}}
          onClick={() => handleImageClick(mainImage)}
        />
      )}

      <div className="flex flex-wrap justify-center">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{width:'100px'}}
            className={`w-95 h-88 m-2 cursor-pointer ${
              index >= 4 && "hidden"
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
        {galleryImages.length > 4 && (
          <div
            className="w-95 h-88 m-2 flex items-center justify-center border border-gray-300 cursor-pointer"
            onClick={handleMoreImagesClick}
          >
            <p className="text-lg">4+</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
