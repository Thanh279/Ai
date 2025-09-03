import React from 'react';

const BlogCard = ({ blog }) => (
  <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover mb-2 rounded" />
    <h3 className="text-lg font-semibold">{blog.title}</h3>
    <p className="text-gray-600 mb-2">{blog.excerpt}</p>
    <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">Read More</a>
  </div>
);

export default BlogCard;