import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
import AuthContext from '../context/AuthContext';

const UserProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <UserProfile />
        {user && (
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UserProfilePage;