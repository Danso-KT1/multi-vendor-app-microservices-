const amqp = require('amqplib');

const QUEUE_NAME = 'orders';

const sendOrderToQueue = async (order) => {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URI);
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME);
        channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(order)));
        console.log('Order sent to queue:', order);
        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.error('Error sending order to queue:', error);
    }
};

module.exports = { sendOrderToQueue };