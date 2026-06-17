const mongoose = require('mongoose');

const mongo_url = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongo_url);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});


module.exports = db;