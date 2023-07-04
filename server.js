const express = require('express');
const app = express();


// Endpoint 1: Hello world
app.get('/', (req, res) => {
    res.send('HELLO WORLD!');
});

// Endpoint 2: About
app.get('/about', (req, res) => {
    res.send('This is about page');
});

// Start the server
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});