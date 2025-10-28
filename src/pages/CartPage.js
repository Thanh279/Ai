import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import CartContext from '../context/CartContext';

const CartPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;