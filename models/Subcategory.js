const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    // ... other fields if needed ...
});

const Subcategory = mongoose.models.Subcategory || mongoose.model('Subcategory', SubcategorySchema);
module.exports = Subcategory;
