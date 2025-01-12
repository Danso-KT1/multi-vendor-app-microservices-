// File: src/pages/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div
      className="hero-image text-white d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        backgroundImage: "url('https://t4.ftcdn.net/jpg/02/32/16/07/360_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //backgroundColor: 'rgba(255,255,255,0.85)'
        }}
      ></div>
      <div className="text-center position-relative" style={{ color: 'black' }}>
        <h1 className="display-1 fw-bold mb-4" style={{ fontSize: '5rem' }}>
          Welcome to Multi-Vendor Platform
        </h1>
        <p className="fs-1 mb-5" style={{ fontSize: '2.5rem' }}>
          Discover amazing products or start selling yours!
        </p>
        <div className="mt-5">
          <Link 
            to="/register" 
            className="btn btn-success btn-lg me-4 fs-2 px-5 py-3"
            style={{
              transition: 'all 0.3s ease',
              borderRadius: '12px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Register
          </Link>
          <Link 
            to="/login" 
            className="btn btn-primary btn-lg fs-2 px-5 py-3"
            style={{
              transition: 'all 0.3s ease',
              borderRadius: '12px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;