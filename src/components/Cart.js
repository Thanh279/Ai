import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    {cart.length === 0 ? (
      <p className="text-gray-600">Your cart is empty.</p>
    ) : (
      <>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-4 text-right">
          <p className="font-bold">
            Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
          <a href="/checkout" className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Proceed to Checkout
          </a>
        </div>
      </>
    )}
  </div>
);

export default Cart;