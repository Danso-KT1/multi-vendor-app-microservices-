const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, email, password, role } = req.body;

    if (!['buyer', 'seller'].includes(role)) {
        return res.status(400).json({ message: "Role must be 'buyer' or 'seller'" });
    }

    try {
        const newUser = new User({ username, email, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            // Log unsuccessful attempt
            user.loginAttempts.push({ successful: false });
            await user.save();
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Log successful attempt
        user.loginAttempts.push({ successful: true });
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

// Route to get all login attempts
exports.getLoginAttempts = async (req, res) => {
    try {
        const users = await User.find({}, 'username email loginAttempts'); // Fetch only necessary fields
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching login attempts', error: error.message });
    }
};