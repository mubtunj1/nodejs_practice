//routes.j,s
const express = require("express");
const router = express.Router();

// Endpoint 1: Hello world 
router.get('/', (req, res) =>
{
    res.send('Hello, World!');
});

// Endpoint 2: About
router.get('/about', (req, res)=>
{
    res.send('This is the about page.');
});



module.exports = router;