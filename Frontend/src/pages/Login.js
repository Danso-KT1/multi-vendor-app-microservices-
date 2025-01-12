// File: src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('token', JSON.stringify(user));
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center display-2 mb-5 fw-bold">Login</h1>
          <form onSubmit={handleSubmit} className="p-5 shadow rounded" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="mb-4">
              <label className="form-label fs-2 mb-3">Email</label>
              <input
                type="email"
                className="form-control form-control-lg fs-3 py-3"
                style={{ height: 'auto' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label fs-2 mb-3">Password</label>
              <input
                type="password"
                className="form-control form-control-lg fs-3 py-3"
                style={{ height: 'auto' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 fs-2 py-3"
              style={{
                transition: 'all 0.3s ease',
                borderRadius: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

