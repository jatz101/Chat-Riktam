const express = require('express');
const router = express.Router();
const { getDb } = require('../db');

const isAdmin = (req) => {
    const user = req.user;
    return user.isAdmin;
}

router.post('/create-user', async (req, res) => {
    try {
        if (isAdmin(req)) {
            const { username, password, isAdmin } = req.body;
            if (!username || !password) {
                return res.status(400).json({ error: 'Missing required fields.' });
            }
            const usersCollection = getDb().collection('users');
            const existingUser = await usersCollection.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ error: 'Username already exists.' });
            }
            const newUser = {
                username,
                password,
                isAdmin,
            };
            const result = await usersCollection.insertOne(newUser);
            res.status(201).json({ message: 'User created successfully.', user: result.ops[0] });

        }
        else {
            res.status(403).json({ error: 'Permission denied. Admin access required.' });
        }
    } catch (error) {
        console.error('Error during creating user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.put('/edit-user/:userName', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { username, password, role } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        const usersCollection = getDb().collection('users');
        const existingUser = await usersCollection.findOne({ _id: userId });
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        const updatedUser = {
            $set: {
                username,
                password, 
                role,
            },
        };
        await usersCollection.updateOne({ _id: userId }, updatedUser);
        res.json({ message: 'User updated successfully.' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;