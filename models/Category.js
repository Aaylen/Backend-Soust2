const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    // ... other fields if any ...
});

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);
module.exports = Category;
