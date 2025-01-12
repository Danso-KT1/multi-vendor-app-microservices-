import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(token) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg shadow py-4" style={{ minHeight: '100px', backgroundColor: '#0d6efd' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fw-bold px-4 text-white" to="/home" style={{ fontSize: '2.5rem' }}>
          Multi-Vendor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ transform: 'scale(1.5)', margin: '10px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item px-2">
              <Link 
                className="nav-link fs-3 px-4 py-2 text-white" 
                to="/home"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  margin: '0 5px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link 
                className="nav-link fs-3 px-4 py-2 text-white" 
                to="/cart"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  margin: '0 5px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link 
                className="nav-link fs-3 px-4 py-2 text-white" 
                to="/manage-products"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  margin: '0 5px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Manage Products
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link 
                className="nav-link fs-3 px-4 py-2 text-white" 
                to="/dashboard"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  margin: '0 5px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item px-2 position-relative">
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                    onClick={() => navigate('/profile')}
                    style={{
                      transition: 'all 0.3s ease',
                      borderRadius: '8px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <User size={24} />
                    <span className="fs-3">Profile</span>
                  </button>
                  <button 
                    className="btn btn-light btn-lg fs-3 px-4" 
                    onClick={handleLogout}
                    style={{
                      transition: 'all 0.3s ease',
                      borderRadius: '8px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item px-2">
                  <Link 
                    className="nav-link fs-3 px-4 py-2 text-white" 
                    to="/login"
                    style={{
                      transition: 'all 0.3s ease',
                      borderRadius: '8px',
                      margin: '0 5px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link 
                    className="nav-link fs-3 px-4 py-2 text-white" 
                    to="/register"
                    style={{
                      transition: 'all 0.3s ease',
                      borderRadius: '8px',
                      margin: '0 5px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;