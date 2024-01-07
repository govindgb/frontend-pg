// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import routes from routes folder
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/', userRoutes); // Use userRoutes for specific routes

// Start server
const PORT = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
