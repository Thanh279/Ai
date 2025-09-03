import React from 'react';

const RegisterForm = ({ setUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // api.register(email, password).then(user => {
    //   setUser(user);
    //   window.location.hash = "/";
    // });
  };

  return (
    <div className="#7f6d5c rounded-lg max-w-sm mx-auto form-box Register animation">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>Register</h2>
      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-yellow-400 text-white p-2 rounded hover:bg-[#ffdab9]"
          style={{ backgroundColor: '#FFD700' }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
