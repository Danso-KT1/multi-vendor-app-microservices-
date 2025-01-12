// File: src/pages/ManageProducts.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (!user) return;

    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    const userProducts = allProducts.filter((product) => product.owner === user.email);
    setProducts(userProducts);
  }, []);

  const deleteProduct = (id) => {
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = allProducts.filter((product) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    const user = JSON.parse(localStorage.getItem('token'));
    const userProducts = updatedProducts.filter((product) => product.owner === user.email);
    setProducts(userProducts);

    alert('Product deleted successfully!');
  };

  return (
    <div className="container py-5">
      <h1 className="text-center display-2 mb-5 fw-bold">Manage Your Products</h1>
      <button
        className="btn btn-success btn-lg fs-3 px-5 py-3 mb-5"
        onClick={() => navigate('/add-product')}
        style={{
          borderRadius: '12px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Add New Product
      </button>
      
      {products.length === 0 ? (
        <p className="text-center fs-2">You have no products listed for sale.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-5" key={product.id}>
              <div 
                className="card shadow h-100"
                style={{ 
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
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
                <img
                  src={product.imageURL}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h2 className="card-title fs-2 mb-3">{product.name}</h2>
                  <p className="card-text fs-4 mb-4">{product.description}</p>
                  <p className="card-text fs-3 mb-3">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className="card-text fs-3 mb-4">
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-primary btn-lg fs-3 flex-grow-1 py-3"
                      onClick={() => alert('Edit functionality not yet implemented!')}
                      style={{
                        borderRadius: '10px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-lg fs-3 flex-grow-1 py-3"
                      onClick={() => deleteProduct(product.id)}
                      style={{
                        borderRadius: '10px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;