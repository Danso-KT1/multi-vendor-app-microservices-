import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'buyer' // Default role
  });
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProductChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      ...formData,
      id: Date.now().toString()
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newProduct = {
      ...productData,
      id: Date.now().toString()
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product added successfully!');
    setProductData({ productName: '', productPrice: '' }); // Reset product form
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center display-2 mb-5 fw-bold">Register</h1>
          <form onSubmit={handleSubmit} className="p-5 shadow rounded" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="mb-4">
              <label className="form-label fs-2 mb-3">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control form-control-lg fs-3 py-3"
                style={{ height: 'auto' }}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label fs-2 mb-3">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control form-control-lg fs-3 py-3"
                style={{ height: 'auto' }}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label fs-2 mb-3">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg fs-3 py-3"
                style={{ height: 'auto' }}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label fs-2 mb-3">Password</label>
              <input
                type="password"
                name="password"
                className="form-control form-control-lg fs-3 py-3"
                style={{ height: 'auto' }}
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label fs-2 mb-3">Role</label>
              <select
                name="role"
                className="form-control form-control-lg fs-3 py-3"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
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
              Register
            </button>
          </form>

          {formData.role === 'seller' && (
            <form onSubmit={handleProductSubmit} className="p-5 shadow rounded mt-4" style={{ backgroundColor: '#f8f9fa' }}>
              <h2 className="text-center mb-4">Add Product</h2>
              <div className="mb-4">
                <label className="form-label fs-2 mb-3">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="form-control form-control-lg fs-3 py-3"
                  style={{ height: 'auto' }}
                  value={productData.productName}
                  onChange={handleProductChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fs-2 mb-3">Product Price</label>
                <input
                  type="number"
                  name="productPrice"
                  className="form-control form-control-lg fs-3 py-3"
                  style={{ height: 'auto' }}
                  value={productData.productPrice}
                  onChange={handleProductChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-success btn-lg w-100 fs-2 py-3"
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
                Add Product
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;