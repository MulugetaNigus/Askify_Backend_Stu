// database connections
const mongoose = require("mongoose");
require("dotenv").config();

const DatabaseConnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Database Connected !");
    });
  } catch (error) {
    console.log(err.message);
  }
};

module.exports = { DatabaseConnection };
