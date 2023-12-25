const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    new_price: { type: Number, required: true },
    old_price: Number,
    images: [{ type: String }],
    featured: String,
    mainCategory: { type: mongoose.Types.ObjectId, ref: 'Category' },
    subCategory: { type: mongoose.Types.ObjectId, ref: 'Subcategory' },   
    sizes: [{type:String}], 
    tags: String,
}, {
    timestamps: true,
});

// Check if the model has already been compiled
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

module.exports = Product;
