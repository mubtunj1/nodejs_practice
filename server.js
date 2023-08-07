const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

// Import routes
const routes = require('./routes');
// Use routes
app.use('/', routes);

// Import and initialize MongoDB
const initializeMongoDB = require('./mongdb');
initializeMongoDB(process.env.MONGO_URI)
    .then(() => {
        // Start the server after successful MongoDB connection
        const port = 3000;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}...`);
        });
    })
    .catch((error) => {
        console.error('Error initializing MongoDB:', error);
    });
