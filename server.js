require('dotenv').config();
const express = require('express');
const { mongooseConnect } = require('./lib/mongooseConnect');
const productsRoute = require('./routes/products');
const slideshowRoutes = require('./routes/slideshow'); 
const cors = require('cors');
const path = require('path');
const app = express();
// Assuming __dirname is the directory of the current module
const buildPath = path.join(__dirname, '../Frontend-Soust/build');

app.use(express.static(buildPath));


// Import Category and Subcategory models to ensure they are registered
require('./models/Category'); // Adjust the path as necessary
require('./models/Subcategory'); // Adjust the path as necessary
require('./models/Slideshow')



// Connect to MongoDB using mongooseConnect
mongooseConnect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(cors()); // Enable CORS if needed
app.use(express.json()); // For parsing application/json

// Use the products route
app.use('/api', productsRoute);
app.use('/api', slideshowRoutes);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../Frontend-Soust/build/index.html'), function(err) {
        if (err) {
            console.error(err);
            res.status(500).send(err);
            return;
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
