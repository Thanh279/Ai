import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Token:</strong> {user.token}</p>
        </div>
      ) : (
        <p className="text-gray-600">Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;