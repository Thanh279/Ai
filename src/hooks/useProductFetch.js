import { useState, useEffect } from 'react';
import { productsApi } from '../services/products';

const useProductFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsApi.fetchProductsWithImages();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.categoryId === category);
  };

  return {
    products,
    loading,
    error,
    getProductById,
    getProductsByCategory
  };
};

export default useProductFetch;
