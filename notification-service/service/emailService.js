const nodemailer = require('nodemailer');

const sendEmail = async (recipient, message) => {
    // Configure your email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Example: Use Gmail
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: 'Notification',
        text: message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };