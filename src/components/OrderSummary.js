import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const OrderSummary = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <ul className="space-y-2">
        {cart.map(item => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-2">
        <p className="text-lg font-semibold">Total: ${total}</p>
      </div>
    </div>
  );
};

export default OrderSummary;