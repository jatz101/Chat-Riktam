const express = require('express');
const router = express.Router();

router.get('/send-message/:groupId', async (req, res) => {
    try {
        // send message in grp
        // db updation and response
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/like-message/:messageId', async (req, res) => {
    const { username } = req.body;
    try {
        // check if message exists
        // update message status
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;