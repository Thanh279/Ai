import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const cartItems = Object.values(cart);
  const cartLength = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getItemPrice = (item) => {
    const price = item.salePrice || item.price || 0;
    return price;
  };

  const getItemTotal = (item) => {
    return getItemPrice(item) * item.quantity;
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + getItemTotal(item), 0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {cartLength === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b">
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{getItemPrice(item).toLocaleString('vi-VN')} VND</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{getItemTotal(item).toLocaleString('vi-VN')} VND</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="font-bold text-lg">
              Total: {getTotal().toLocaleString('vi-VN')} VND
            </p>
            <a href="/checkout" className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
