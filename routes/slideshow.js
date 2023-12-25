const express = require('express');
const router = express.Router();
const Slideshow = require('../models/Slideshow'); // Adjust path as necessary

router.get('/slideshow', async (req, res) => {
    try {
        const slideshow = await Slideshow.findOne(); // Assuming there's only one slideshow document
        if (!slideshow) {
            return res.status(404).json({ message: 'Slideshow not found' });
        }
        res.json(slideshow.images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
