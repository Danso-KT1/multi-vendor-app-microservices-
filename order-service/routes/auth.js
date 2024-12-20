const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

module.exports = router;