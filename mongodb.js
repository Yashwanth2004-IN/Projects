// mongodb.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectToDatabase() {
    if (db) return db; // Return existing connection if already established
    try {
        await client.connect();
        db = client.db(); // Use default DB from URI
        console.log("Connected to MongoDB Atlas");
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

module.exports = connectToDatabase;
