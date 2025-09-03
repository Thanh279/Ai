import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetchOrders from '../hooks/useFetchOrders';
import OrderContext from '../context/OrderContext';

const OrderHistory = () => {
  const { orders, loading } = useFetchOrders();
  const { setOrders } = useContext(OrderContext);

  React.useEffect(() => {
    setOrders(orders);
  }, [orders, setOrders]);

  if (loading) return <p className="text-center py-8">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Order History</h1>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders yet.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map(order => (
              <li key={order.id} className="border p-4 rounded">
                <p>Order #{order.id} - ${order.total.toFixed(2)}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistory;