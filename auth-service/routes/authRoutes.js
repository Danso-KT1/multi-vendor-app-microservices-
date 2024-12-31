const express = require('express');
const { register, login, getLoginAttempts } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logins', verifyToken, getLoginAttempts); // Protect this route

module.exports = router;