const mongoose = require("mongoose");

const SlideshowSchema = new mongoose.Schema({
    images: [{ type: String, required: true }] // Array of image URLs
});

const Slideshow = mongoose.models.Slideshow || mongoose.model('Slideshow', SlideshowSchema);
module.exports = Slideshow;
