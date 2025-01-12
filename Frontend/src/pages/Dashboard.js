// File: src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="text-center display-2 mb-5 fw-bold">Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div 
            className="card shadow h-100"
            style={{ 
              borderRadius: '15px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
            }}
          >
            <div className="card-body p-5">
              <h2 className="card-title fs-1 mb-4">Manage Products</h2>
              <p className="card-text fs-3 mb-4">Add, edit, or delete your product listings.</p>
              <button
                className="btn btn-primary btn-lg fs-3 px-5 py-3"
                onClick={() => navigate('/add-product')}
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
                Go to Manage Products
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div 
            className="card shadow h-100"
            style={{ 
              borderRadius: '15px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
            }}
          >
            <div className="card-body p-5">
              <h2 className="card-title fs-1 mb-4">Order History</h2>
              <p className="card-text fs-3 mb-4">View orders placed for your products.</p>
              <button
                className="btn btn-primary btn-lg fs-3 px-5 py-3"
                onClick={() => navigate('/orders')}
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
                View Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
