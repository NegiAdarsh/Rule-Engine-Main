const mongoose = require("mongoose");
require("dotenv").config();

const db_password = process.env.DB_PASSWORD;

const mongoURI = `mongodb+srv://Admin-adarsh:1234@cluster0.zvgot.mongodb.net/`;

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

function disconnectDB() {
  mongoose.disconnect();
}

module.exports = { connectDB, disconnectDB };
