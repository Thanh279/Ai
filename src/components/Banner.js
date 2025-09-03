import React from 'react';

const Banner = ({ image, title, subtitle }) => (
  <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default Banner;