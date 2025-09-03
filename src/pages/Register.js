import React, { useState } from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModalAuthForm from '../components/ModalAuthForm';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
  const { setUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    setShowModal(false);
  };

  if (!showModal) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto py-8 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Open Login/Register
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1 flex items-center justify-center">
        <ModalAuthForm setUser={handleRegisterSuccess} onClose={handleCloseModal} />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
