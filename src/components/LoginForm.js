import React from 'react';

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = () => {
    // api.login(email, password).then(user => {
    //   setUser(user);
    //   window.location.hash = "/";
    // });
  };
  return (
    <div className="#7f6d5c rounded-lg  max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
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
<button
          onClick={handleLogin}
          className="w-full bg-[#f9cc59] text-white p-2 rounded hover:bg-[#f9bc35]"
         
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;