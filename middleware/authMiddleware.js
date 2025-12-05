const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            console.log('Token received:', token);

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token decoded:', decoded);

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                console.log('User not found for token');
                res.status(401).json({ message: 'Not authorized, user not found' });
                return;
            }

            next();
        } catch (error) {
            console.error('Auth Error:', error.message);
            res.status(401).json({ message: 'Not authorized', error: error.message });
            return;
        }
    }

    if (!token) {
        console.log('No token provided');
        res.status(401).json({ message: 'Not authorized, no token' });
        return;
    }
};

module.exports = { protect };
