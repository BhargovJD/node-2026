const express = require('express');
const router = express.Router();
const User = require('../models/Person');

// CREATE
router.post('/', async (req, res) => {
    try {
        const newPerson = new User(req.body);
        const savedPerson = await newPerson.save();

        console.log('Data saved successfully');
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const data = await User.find();

        console.log('Data fetched successfully');
        res.status(200).json(data);
    } catch (error) {
        console.log('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedPerson = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data updated successfully');
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.log('Error updating person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedPerson = await User.findByIdAndDelete(req.params.id);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data deleted successfully');
        res.status(200).json({ message: 'Person deleted successfully', deletedPerson });
    } catch (error) {
        console.log('Error deleting person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;