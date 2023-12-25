const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust path as necessary

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
                                      .populate('mainCategory')
                                      .populate('subCategory');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
