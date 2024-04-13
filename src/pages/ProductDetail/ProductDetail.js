import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DetailCard from '../../components/DetailCard';
import Rating from '../../components/Rating';
import Comment from '../../components/Comment';
import ImageGallery from '../../components/ImageGallery';
import { useParams } from 'react-router-dom';
import products from '../../dummy/products.json'
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      // Temukan produk dengan id yang cocok
      const selectedProduct = products.find((product) => product.id.toString() === id);
  
      // Setel produk yang ditemukan ke dalam state
      setProduct(selectedProduct);
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>; // Tampilkan loading indicator jika data produk sedang diambil
    }
  
    const { name, price, image, productDetails } = product;
    const { productName, productDescription, productPrice, productRating, comments, images } = productDetails;
    console.log(productDetails)
    return (
      <div className="container mx-auto mt-8">
        {/* Baris pertama: Breadcumb */}
        <Breadcrumb
            items={[
              { id: 1, name: "Dashboard",link:'/dashboard' },
              { id: 2, name: productName}
            ]}
          />

        <div className="flex mt-8">
          {/* Sebelah kiri: ImageGallery */}
          <div className="w-1/2 pr-4">
            <ImageGallery images={images} />
          </div>
  
          {/* Sebelah kanan: DetailCard, Rating, dan Ulasan/Comment */}
          <div className="w-1/2 pl-4">
            {/* DetailCard */}
            <DetailCard productName={productName} description={productDescription} price={productPrice} />
  
            {/* Rating */}
            {/* <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Rating</h3>
              <Rating totalRating={productRating} />
            </div> */}
  
            {/* Ulasan/Comment */}
            {/* <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Ulasan</h3>
              {comments.map((comment, index) => (
                <Comment key={index} text={comment.text} media={comment.media} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    );
  };

export default ProductDetail;
