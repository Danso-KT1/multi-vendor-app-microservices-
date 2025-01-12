// File: src/pages/AddProduct.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('token'));
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(price),
      description,
      stock: parseInt(stock),
      imageURL,
      owner: user.email,
    };

    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...existingProducts, newProduct]));

    alert('Product added successfully!');
    navigate('/manage-products');
  };

  return (
    <div className="container py-5">
      <h1 className="text-center display-2 mb-5 fw-bold">Add a Product</h1>
      <form 
        onSubmit={handleSubmit} 
        className="shadow p-5 bg-white rounded-4 mx-auto"
        style={{ maxWidth: '800px' }}
      >
        <div className="mb-4">
          <label htmlFor="productName" className="form-label fs-2 mb-3">Product Name</label>
          <input
            type="text"
            id="productName"
            className="form-control form-control-lg fs-3 py-3"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="form-label fs-2 mb-3">Price ($)</label>
          <input
            type="number"
            id="price"
            className="form-control form-control-lg fs-3 py-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="form-label fs-2 mb-3">Description</label>
          <textarea
            id="description"
            className="form-control form-control-lg fs-3 py-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
            style={{ borderRadius: '10px' }}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="form-label fs-2 mb-3">Stock Quantity</label>
          <input
            type="number"
            id="stock"
            className="form-control form-control-lg fs-3 py-3"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="imageURL" className="form-label fs-2 mb-3">Image URL</label>
          <input
            type="text"
            id="imageURL"
            className="form-control form-control-lg fs-3 py-3"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
            style={{ borderRadius: '10px' }}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary btn-lg w-100 fs-2 py-3"
          style={{
            borderRadius: '12px',
            transition: 'all 0.3s ease'
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
    </div>
  );
};

export default AddProduct;