require('dotenv').config();
const express = require('express');
const { mongooseConnect } = require('./lib/mongooseconnect');
const productsRoute = require('./routes/products');
const slideshowRoutes = require('./routes/slideshow'); 
const cors = require('cors');

// Import Category and Subcategory models to ensure they are registered
require('./models/Category'); // Adjust the path as necessary
require('./models/Subcategory'); // Adjust the path as necessary
require('./models/Slideshow')

const app = express();

// Connect to MongoDB using mongooseConnect
mongooseConnect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(cors()); // Enable CORS if needed
app.use(express.json()); // For parsing application/json

// Use the products route
app.use('/api', productsRoute);
app.use('/api', slideshowRoutes);

// ...other configurations and middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
