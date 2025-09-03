import React from 'react';

const CheckoutForm = ({ cart }) => {
  const [loading, setLoading] = React.useState(false);
  const handleCheckout = () => {
    setLoading(true);
    // api.checkout(cart).then(() => {
    //   alert("Order placed successfully!");
    //   setLoading(false);
    // });
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Shipping Address</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Enter address" />
        </div>
        <div>
          <label className="block font-semibold">Payment Method</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Card number" />
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;