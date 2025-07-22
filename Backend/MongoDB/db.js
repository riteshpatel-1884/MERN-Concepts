const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`); 
  }
};

module.exports = connectDB;
