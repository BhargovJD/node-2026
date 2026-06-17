const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour', 'salty'],
        required: true
    },
    category: {
        type: String,
        enum: ['starter', 'main course', 'dessert', 'beverage'],
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    numSales: {
        type: Number,
        default: 0,
        min: 0
    }
}, {
    timestamps: true
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;