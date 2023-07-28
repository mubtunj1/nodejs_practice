const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:207017"
const db_Name = "practice"


// Function to initialize the MongoDB connection
async function intialiseMongoDB() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Sucessful connected to data base');
        return client.db(db_Name);
    } catch (error) {
        console.error('Failed to connect to Mongodb', error);
        process.exit(1);
    }
}

module.exports = intialiseMongoDB;