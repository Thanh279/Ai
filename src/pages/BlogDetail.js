import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Nếu sử dụng React Router
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogsApi from '../services/blog';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogsApi.fetchBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center py-8">Loading blog...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1">
        {blog && (
          <div className="max-w-2xl mx-auto">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded" />
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-4">{blog.content}</p>
            <p className="text-sm text-gray-500">Posted on: {new Date(blog.date).toLocaleDateString()}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;