const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticate = require('../middleware/auth'); // Import authentication middleware

// Create a new order
router.post('/', authenticate, orderController.createOrder); // Use middleware
// Get all orders
router.get('/', authenticate, orderController.getAllOrders); // Use middleware

module.exports = router;