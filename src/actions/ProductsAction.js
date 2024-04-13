import { PRODUCT_FAILED, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./Types"
import products from '../dummy/products.json'
const ProductLoading = () => {
    return {
        type: PRODUCT_LOADING
    }
}

const ProductSuccess = (res) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: res
    }
}

const ProductFailed = (err) => {
    return {
        type: PRODUCT_FAILED,
        payload: err
    }
}

export const getAllProducts = ({ searching, navigate }) => {
    return (dispatch) => {
      dispatch(ProductLoading()); // Menandakan permintaan pengambilan produk telah dimulai
  
      // Proses pencarian produk
      let filteredProducts = [];
      if (!searching || searching.trim() === "" || searching.toLowerCase() === "all") {
        // Jika pencarian kosong, kirim semua produk
        filteredProducts = products;
      } else {
        // Jika ada pencarian, filter produk berdasarkan nama atau kategori yang mengandung kata kunci
        const keyword = searching.toLowerCase().trim();
        filteredProducts = products.filter(product => {
          return product.name.toLowerCase().includes(keyword) || product.category.toLowerCase().includes(keyword);
        });
      }
      console.log("Filtered Products", filteredProducts);
  
      // Mengirim hasil pencarian ke reducer
      if (filteredProducts.length > 0) {
        dispatch(ProductSuccess(filteredProducts));
      } else {
        dispatch(ProductFailed("No products found"));
      }
  
      navigate('/dashboard'); // Pindahkan navigasi ke dashboard setelah melakukan pencarian
    };
  };
  