const express = require('express');
const { createNotification } = require('../controllers/notificationController');

const router = express.Router();

// Create Notification route
router.post('/', createNotification);

module.exports = router;