const Order = require('../models/Order');
const { sendOrderToQueue } = require('../rabbitmq');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            ...req.body,
            userId: req.user.id // Attach user ID from the token
        });

        await newOrder.save();

        // Send order to RabbitMQ
        await sendOrderToQueue(newOrder);
        
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id }); // Fetch orders for the authenticated user
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
};