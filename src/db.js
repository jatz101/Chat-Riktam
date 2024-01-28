const mongoose = require('mongoose');

let dbCollection;

async function connectToDatabase() {
    try {
        mongoose.connect('<server_url>', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB');
        });
        dbCollection = db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

function getDb() {
    return dbCollection;
}

module.exports = { connectToDatabase, getDb };