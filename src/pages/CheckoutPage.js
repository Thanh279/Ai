import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';
import CartContext from '../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1">
        <CheckoutForm cart={cart} />
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;