const express = require('express');
const router = express.Router();
// const User = require('../models/user');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const usersCollection = getDb().collection('users');
        const user = await usersCollection.findOne({ username });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!user || !isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
        const token = jwt.sign({ userId: user._id, username: user.username, role: user.isAdmin }, "MY_SECRET");
        console.log("Login Successul");
        res.json({ token });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.post('/logout', async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: Token not provided' });
        }
        jwt.verify(token, 'MY_SECRET', (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized: Invalid token' });
            }
            req.userId = decoded.userId;
        });
        res.json({ message: "Logout Successful" });

    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;