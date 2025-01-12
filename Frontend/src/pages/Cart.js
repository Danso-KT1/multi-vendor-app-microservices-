// File: src/pages/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    setCartItems([]);
    setTotalPrice(0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <h1 className="text-center display-2 fw-bold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center display-2 mb-5 fw-bold">Your Cart</h1>
      <div className="table-responsive">
        <table className="table table-hover fs-3">
          <thead>
            <tr className="table-dark">
              <th className="py-4 px-4">Product</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4">Quantity</th>
              <th className="py-4 px-4">Total</th>
              <th className="py-4 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="align-middle">
                <td className="py-4 px-4">{item.name}</td>
                <td className="py-4 px-4">${item.price}</td>
                <td className="py-4 px-4">
                  <input
                    type="number"
                    className="form-control form-control-lg fs-3"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    style={{ width: '120px', borderRadius: '10px' }}
                  />
                </td>
                <td className="py-4 px-4">${item.price * item.quantity}</td>
                <td className="py-4 px-4">
                  <button 
                    className="btn btn-danger btn-lg fs-3 px-4"
                    onClick={() => removeItem(item.id)}
                    style={{
                      transition: 'all 0.3s ease',
                      borderRadius: '10px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <h2 className="text-end fs-1 mb-4">Total: ${totalPrice}</h2>
        <button 
          className="btn btn-primary btn-lg w-100 fs-2 py-3"
          onClick={handleCheckout}
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
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;