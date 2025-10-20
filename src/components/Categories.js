import React, { useEffect, useState } from 'react';
import { categoriesApi } from '../services/categories';
import '../styles/Home.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoriesApi.fetchCategories();
        setCategories(data.slice(0, 4)); // Limit to 4 categories for display
      } catch (err) {
        setError('Failed to load categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="categories">
        <div className="text-center py-8">Loading categories...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="categories">
        <div className="text-center py-8 text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="categories">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <div className="category-img">
            {category.name.charAt(0).toUpperCase()}
          </div>
          <div className="category-title">{category.name.toUpperCase()}</div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
