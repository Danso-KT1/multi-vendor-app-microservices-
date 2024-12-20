const Notification = require('../models/Notification');
const { sendOrderConfirmation } = require('../service/mailer'); // Import the correct function
const amqp = require('amqplib');

const createNotification = async (req, res) => {
    const { message, recipient, orderDetails } = req.body; // Include orderDetails

    try {
        // Create and save notification to the database
        const notification = new Notification({ message, recipient });
        await notification.save();

        // Send order confirmation email
        await sendOrderConfirmation(recipient, orderDetails); // Pass recipient and order details

        // Publish message to RabbitMQ
        const connection = await amqp.connect(process.env.RABBITMQ_URI);
        const channel = await connection.createChannel();
        const queue = 'notifications';

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify({ message, recipient })), {
            persistent: true,
        });

        res.status(201).json({ message: 'Notification created and email sent', notification });
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ message: 'Error creating notification', error: error.message });
    }
};

module.exports = { createNotification };