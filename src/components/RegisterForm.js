import React, { useState } from 'react';
import { authApi } from '../services/auth';

const RegisterForm = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!password.trim()) {
      setError("Password is required");
      return false;
    }
    if (!confirmPassword.trim()) {
      setError("Confirm password is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    setError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      const user = await authApi.register({ email, password });
      setUser(user);
      window.location.hash = "/";
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <div className="#7f6d5c rounded-lg max-w-sm mx-auto form-box Register animation">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>Register</h2>
      {error && (
        <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button
          onClick={handleRegister}
          disabled={loading}
          className={`w-full text-white p-2 rounded ${loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-yellow-400 hover:bg-[#ffdab9]'
            }`}
          style={{ backgroundColor: loading ? '#ccc' : '#FFD700' }}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
