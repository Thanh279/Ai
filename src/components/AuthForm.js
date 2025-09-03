import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = ({ setUser }) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div>
      {isRegister ? (
        <div>
          <RegisterForm setUser={setUser} />
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <button onClick={toggleForm} className="text-blue-500 underline">
              Login
            </button>
          </p>
        </div>
      ) : (
        <div>
          <LoginForm setUser={setUser} />
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <button onClick={toggleForm} className="text-blue-500 underline">
              Register
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
