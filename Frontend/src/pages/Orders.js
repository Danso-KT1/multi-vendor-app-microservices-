import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [sortBy, setSortBy] = useState('date');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const userProductIds = products
      .filter((p) => p.owner === user.email)
      .map((p) => p.id);

    const userOrders = allOrders.filter((order) =>
      order.items.some((item) => userProductIds.includes(item.productId))
    );

    setOrders(userOrders);
  }, []);

  const getStatusColor = (status) => {
    const statusColors = {
      pending: 'bg-warning',
      processing: 'bg-info',
      shipped: 'bg-success',
      delivered: 'bg-primary',
      cancelled: 'bg-danger',
    };
    return statusColors[status.toLowerCase()] || 'bg-secondary';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (orders.length === 0) {
    return (
      <div className="container py-16">
        <div className="text-center bg-white p-8 rounded shadow-sm mx-auto max-w-2xl">
          <h1 className="display-4 mb-4">No Orders Found</h1>
          <p className="lead text-muted">
            No one has placed orders for your products yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4">Orders Dashboard</h1>
          <div className="d-flex gap-3">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="price">Sort by Price</option>
              <option value="status">Sort by Status</option>
            </select>
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="row g-4">
          {orders.map((order, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-header bg-light">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="h4 mb-0">Order #{order.id}</h2>
                    <span className={`badge ${getStatusColor(order.status)} text-white`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="h5 mb-0">Total Amount:</span>
                      <span className="h5 text-success mb-0">
                        ${order.totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-muted mb-2">
                      {formatDate(order.date || new Date())}
                    </div>
                    <div className="text-muted">
                      {order.customerEmail || 'Customer'}
                    </div>
                  </div>

                  <div>
                    <h3 className="h5 mb-3">Order Items</h3>
                    <div className="bg-light p-3 rounded">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="d-flex justify-content-between align-items-center py-2 border-bottom"
                        >
                          <div>
                            <div className="fw-medium">{item.name}</div>
                            <small className="text-muted">
                              Quantity: {item.quantity}
                            </small>
                          </div>
                          <div className="fw-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;