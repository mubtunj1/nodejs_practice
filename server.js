const express = require('express');
const app = express();

// Import routes
const routes = require('./routes');
// Use routes
app.use('/', routes);

// Import mongodb 
const intialiseMongoDB = require('./mongdb');
db = intialiseMongoDB();

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});