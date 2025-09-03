import React, { useState } from 'react';

const ProductReview = ({ productId, onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !reviewText.trim()) {
      alert('Please provide both rating and review text');
      return;
    }

    const review = {
      productId,
      userName: userName.trim() || 'Anonymous',
      rating,
      text: reviewText.trim(),
      date: new Date().toISOString()
    };

    onSubmitReview(review);
    setRating(0);
    setReviewText('');
    setUserName('');
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setRating(index + 1)}
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } hover:text-yellow-500`}
      >
        ★
      </button>
    ));
  };

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Your Rating</label>
          <div className="flex space-x-1">
            {renderStars()}
          </div>
        </div>
        
        <div>
          <label htmlFor="userName" className="block font-semibold mb-2">Your Name (optional)</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label htmlFor="reviewText" className="block font-semibold mb-2">Your Review</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            className="w-full border rounded p-2"
            placeholder="Share your experience with this product..."
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ProductReview;
