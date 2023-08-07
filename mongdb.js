const mongoose = require('mongoose');


// Function to initialize the MongoDB connection
const initializeMongoDB = (url)=> {
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
}

module.exports = initializeMongoDB;
