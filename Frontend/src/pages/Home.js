// File: src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    setFilteredProducts(storedProducts);
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(keyword) ||
          product.description.toLowerCase().includes(keyword)
      )
    );
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    navigate('/cart');
  };

  return (
    <div className="container py-5">
      <h1 className="text-center display-2 mb-5 fw-bold">Product Listings</h1>
      <div className="mb-5">
        <input
          type="text"
          className="form-control form-control-lg fs-3 py-3"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          style={{ borderRadius: '12px' }}
        />
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-5" key={product.id}>
            <div 
              className="card h-100 shadow"
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
                <p className="card-text fs-3 fw-bold mb-4">
                  ${product.price}
                </p>
                <button
                  className="btn btn-primary btn-lg w-100 fs-3 py-3"
                  onClick={() => addToCart(product)}
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
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;