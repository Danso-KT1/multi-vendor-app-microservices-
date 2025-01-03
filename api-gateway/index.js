const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3008; // API Gateway Port

// Middleware to parse JSON bodies
app.use(express.json());

// Helper function to route requests to services
const createProxyRoute = (serviceName, serviceUrl) => {
    app.use(`/api/${serviceName}`, async (req, res) => {
        try {
            const response = await axios({
                method: req.method,
                url: `${serviceUrl}${req.url}`,
                data: req.body,
                headers: req.headers
            });
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response ? error.response.status : 500).json({ message: error.message });
        }
    });
};

// Define service URLs
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001/api/auth';
const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3002/api/notifications';
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:3003/api/orders';
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3004/api/products';

// Create proxy routes for each service
createProxyRoute('auth', AUTH_SERVICE_URL);
createProxyRoute('notifications', NOTIFICATION_SERVICE_URL);
createProxyRoute('orders', ORDER_SERVICE_URL);
createProxyRoute('products', PRODUCT_SERVICE_URL);

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});