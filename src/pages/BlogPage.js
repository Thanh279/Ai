import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';
import useFetchBlogs from '../hooks/useFetchBlogs';

const BlogPage = () => {
  const { blogs, loading } = useFetchBlogs();

  if (loading) return <p className="text-center py-8">Loading blogs...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;