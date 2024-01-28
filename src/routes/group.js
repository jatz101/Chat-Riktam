const express = require('express');
const router = express.Router();

router.post('/create-group', async (req, res) => {
    try {
        // Create New Group
    } catch (error) {
        console.error('Error during grp creation:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.delete('/delete-group/:groupId', async (req, res) => {
    try {
            // Check if grp exists
            // Delete and send response
    } catch (error) {
        console.error('Error during grp deletion:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/search-groups', async (req, res) => {
    try {
        // Check if group exists
        // Send group id and members
    } catch (error) {
        console.error('Error during grp search:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.post('/add-member/:groupId/:userName', async (req, res) => {
    const { username } = req.body;
    try {
        // check if group exists
        // check if user exits
        // send response and make db change
    } catch (error) {
        console.error('Error during adding member:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;