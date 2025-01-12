import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../mockData';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const product = mockData.find((item) => item.id === parseInt(id));

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setShowModal(true); // Show confirmation modal
  };

  if (!product) {
    return (
      <div className="container py-5">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price: ${product.price}</strong>
      </p>
      <button className="btn btn-success" onClick={addToCart}>
        Add to Cart
      </button>

      {/* Modal Confirmation */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Added to Cart</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{product.name} has been added to your cart.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/cart')}
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
