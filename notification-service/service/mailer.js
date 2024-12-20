// mailer.js
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
        user: process.env.EMAIL_USER, // Your email address from .env
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
});

const sendOrderConfirmation = (customerEmail, orderDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Use the email from .env
        to: customerEmail, // This is the customer's email
        subject: 'Order Confirmation',
        text: `Thank you for your order!\n\nOrder Details:\nProduct: ${orderDetails.product}\nQuantity: ${orderDetails.quantity}\nStatus: ${orderDetails.status}\n\nWe will notify you once your order is shipped.`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendOrderConfirmation };